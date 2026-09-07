create or replace function public.review_payment(p_payment_submission_id uuid,p_action text,p_reason text default null) returns jsonb language plpgsql security definer set search_path=public as $$
declare v_admin uuid:=auth.uid(); v_payment public.payment_submissions%rowtype; v_order public.presale_orders%rowtype; v_ref text:='REVIEW-'||upper(substr(replace(gen_random_uuid()::text,'-',''),1,20));
begin
 if v_admin is null or not exists(select 1 from public.admin_roles where user_id=v_admin and role in('ADMIN','SUPER_ADMIN','REVIEWER')) then raise exception 'ADMIN_AUTHORIZATION_REQUIRED' using errcode='42501'; end if;
 if upper(p_action) not in ('CONFIRM','REJECT','FLAG') then raise exception 'INVALID_REVIEW_ACTION'; end if;
 select * into v_payment from public.payment_submissions where id=p_payment_submission_id for update; if not found then raise exception 'PAYMENT_NOT_FOUND' using errcode='P0002'; end if;
 select * into v_order from public.presale_orders where id=v_payment.order_id for update; if not found then raise exception 'ORDER_NOT_FOUND' using errcode='P0002'; end if;
 if upper(p_action)='CONFIRM' then return public.confirm_payment_and_allocate(v_payment.id,p_reason); end if;
 if v_order.status in ('CONFIRMED','DTR_ALLOCATED') then raise exception 'ORDER_ALREADY_CONFIRMED'; end if;
 if v_order.status not in ('PAYMENT_SUBMITTED','UNDER_REVIEW') then raise exception 'INVALID_ORDER_STATE'; end if;
 if upper(p_action)='REJECT' then update public.payment_submissions set status='REJECTED',updated_at=now() where id=v_payment.id; update public.presale_orders set status='REJECTED',updated_at=now() where id=v_order.id; else update public.payment_submissions set status='FLAGGED',updated_at=now() where id=v_payment.id; update public.presale_orders set status='FLAGGED',updated_at=now() where id=v_order.id; end if;
 insert into public.payment_verifications(payment_submission_id,order_id,reviewer_id,status,reason) values(v_payment.id,v_order.id,v_admin,upper(p_action)::public.payment_verification_status,p_reason);
 insert into public.admin_actions(administrator_id,order_id,payment_submission_id,action,reason) values(v_admin,v_order.id,v_payment.id,upper(p_action)::public.admin_action_type,p_reason);
 insert into public.audit_events(actor_id,event_type,order_id,payment_submission_id,audit_reference,metadata) values(v_admin,'PAYMENT_'||upper(p_action),v_order.id,v_payment.id,v_ref,jsonb_build_object('reason',p_reason));
 return jsonb_build_object('order_id',v_order.id,'payment_submission_id',v_payment.id,'action',upper(p_action),'audit_reference',v_ref);
end; $$;
revoke all on function public.review_payment(uuid,text,text) from public; grant execute on function public.review_payment(uuid,text,text) to authenticated;

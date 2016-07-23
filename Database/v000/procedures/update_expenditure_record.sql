--liquibase formatted sql
--changeset shaohua:update

drop function update_expenditure_record(integer,character varying,double precision,date);
create or replace function update_expenditure_record(_id int, _item VARCHAR, _amount FLOAT, _update_on DATE)
returns expenditures as $$
    DECLARE
        updated_row expenditures%rowtype;
    BEGIN
        UPDATE expenditures set
            item = COALESCE(_item, item),
            amount = COALESCE(_amount, amount),
            update_on = COALESCE(_update_on, update_on)
        where id = _id returning * into updated_row;
        return updated_row;
    END
$$
language 'plpgsql';
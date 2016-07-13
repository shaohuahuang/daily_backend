--liquibase formatted sql
--changeset shaohua:create_table

create table expenditures(
    id serial,
    item VARCHAR(128),
    amount FLOAT,
    update_on DATE not null DEFAULT CURRENT_DATE
);
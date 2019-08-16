create database burgers_db;
use burgers_db;

create table burgers(
    id int(30) auto_increment not null,
    burger_name varchar(80),
    devoured boolean,
    primary key(id)
);
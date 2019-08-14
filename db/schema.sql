create database burgers_db;
use burgers_db;

create table burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(80),
    devoured boolean,
    primary key(id)
);
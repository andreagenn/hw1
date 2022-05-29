create database palestra;
use palestra;

CREATE TABLE utenti (
    username varchar(20) unique not null,
    password varchar(16) not null,
    email varchar(50) not null,
    nome varchar(20) not null ,
    cognome varchar(20) not null,
    abbonamento varchar(6) null,
    primary key(username, password)
)engine=InnoDb;

CREATE TABLE schede (
    username varchar(20) not null,
    esercizio varchar(50) not null,
    primary key(username, esercizio)
)engine=InnoDb;
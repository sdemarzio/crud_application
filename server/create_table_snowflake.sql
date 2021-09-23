-- used to create a movie table.  create separate schemas


use warehouse compute_wh;
use database mentor;
use role sysadmin;

create schema cruddb_sd;

create or replace sequence movie_reviews_id_seq;
create or replace table movie_reviews (id integer default movie_reviews_id_seq.nextval not null, moviename varchar(255) not null, moviereview text(500));


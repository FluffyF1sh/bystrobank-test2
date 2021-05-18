CREATE DATABASE bystrobank;
CREATE USER 'admin'@'localhost'  IDENTIFIED WITH mysql_native_password BY '123qwe456rty';
GRANT all privileges on bystrobank.* TO 'admin'@'localhost';
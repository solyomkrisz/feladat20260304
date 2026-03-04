CREATE DATABASE etterem
DEFAULT CHARACTER SET utf8
COLLATE utf8_hungarian_ci;

USE etterem;

CREATE TABLE etelek(
    id CHAR(36) PRIMARY KEY,
    nev VARCHAR(50) NOT NULL,
    ar INT NOT NULL,
    finomsag VARCHAR(20),
    lejarati_datum DATE NOT NULL,
    mennyiseg INT
);
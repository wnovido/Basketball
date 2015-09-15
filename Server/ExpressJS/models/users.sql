--SQL code SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS basketball DEFAULT CHARACTER SET utf8;
USE basketball;

-- Table basketball.user_login
DROP TABLE IF EXISTS basketball.user_login;

CREATE TABLE IF NOT EXISTS basketball.user_login (
user_id INT(70) NOT NULL AUTO_INCREMENT,
user_email VARCHAR(45) NOT NULL,
user_password VARCHAR(45) NULL,
user_join_date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (user_id),
UNIQUE INDEX user_email_UNIQUE (user_email ASC))
ENGINE = InnoDB;

-- Table basketball.user_info
DROP TABLE IF EXISTS basketball.user_info;

CREATE TABLE IF NOT EXISTS basketball.user_info (
user_info_id INT(70) NOT NULL AUTO_INCREMENT,
user_id_fk INT(70) NOT NULL,
user_name VARCHAR(45) NULL,
user_location VARCHAR(45) NULL,
PRIMARY KEY (user_info_id),
UNIQUE INDEX user_id_fk_UNIQUE (user_id_fk ASC),
CONSTRAINT user_info_foreign_key
FOREIGN KEY (user_id_fk)
REFERENCES basketball.user_login (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Table basketball.user_status
DROP TABLE IF EXISTS basketball.user_status;

CREATE TABLE IF NOT EXISTS basketball.user_status (
user_status_id INT(70) NOT NULL AUTO_INCREMENT,
user_id_fk INT(70) NOT NULL,
status_text TEXT NULL DEFAULT NULL,
status_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (user_status_id),
UNIQUE INDEX user_id_fk_UNIQUE (user_id_fk ASC),
CONSTRAINT user_status_foreign_key
FOREIGN KEY (user_id_fk)
REFERENCES basketball.user_login (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
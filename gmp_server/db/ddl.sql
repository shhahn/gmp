-- DDL --

-- 회원 테이블
CREATE TABLE `gmp`.`user` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `userid` VARCHAR(20) NULL,
  `password` VARCHAR(20) NULL,
  `nickname` VARCHAR(100) NULL,
  `regdate` DATETIME NULL,
  PRIMARY KEY (`seq`));


-- 채팅방 테이블
CREATE TABLE `gmp`.`room` (
  `seq` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(200) NULL,
  `current_user` INT NULL,
  `max_user` INT NULL,
  `creator_userseq` INT NULL,
  `leader_userseq` INT NULL,
  `use_yn` CHAR(1) NULL DEFAULT 'Y',
  `closedate` DATETIME NULL,
  `regdate` DATETIME NULL,
  PRIMARY KEY (`seq`));


-- 채팅방 유저 맵핑
CREATE TABLE `gmp`.`room_user` (
  `room_seq` INT NOT NULL,
  `user_seq` INT NOT NULL,
  PRIMARY KEY (`room_seq`, `user_seq`));


-- 채팅 내용
CREATE TABLE `gmp`.`chat` (
  `seq` INT NOT NULL,
  `room_seq` INT NULL,
  `user_seq` INT NULL,
  `msg` VARCHAR(1000) NULL,
  `regdate` DATETIME NULL,
  PRIMARY KEY (`seq`));


DROP TABLE IF EXISTS `banks`;

CREATE TABLE `banks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `bankname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `banks` WRITE;


INSERT INTO `banks` (`id`, `bankname`)
VALUES
	(2,'Checking Account'),
	(3,'Savings Account - Unallocated'),
	(4,'First Car'),
	(5,'College Fund'),
	(6,'First Home');


UNLOCK TABLES;


DROP TABLE IF EXISTS `deposit`;

CREATE TABLE `deposit` (
  `uid` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT '0',
  `description` varchar(500) DEFAULT '',
  `dtime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `deposit` WRITE;


INSERT INTO `deposit` (`uid`, `bid`, `amount`, `description`, `dtime`)
VALUES
	(2,2,1000,'Initial Check','2018-07-14'),
	(2,3,75000,'Order from XYZ','2018-07-15'),
	(2,2,100,'Check after db change','2018-07-14'),
	(2,2,15000,'House Rent','2018-07-14'),
	(2,2,100000,'For Semester Fee','2018-07-15'),
	(2,2,7000,'from home','2018-07-15'),
	(2,4,10000,'Sample','2018-07-16');


UNLOCK TABLES;


DROP TABLE IF EXISTS `mybanks`;

CREATE TABLE `mybanks` (
  `uid` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `currentbalance` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`,`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `mybanks` WRITE;


INSERT INTO `mybanks` (`uid`, `bid`, `currentbalance`)
VALUES
	(2,2,10100),
	(2,3,75200),
	(2,4,13000);


UNLOCK TABLES;


DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `wallet` int(11) unsigned DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;


INSERT INTO `users` (`uid`, `name`, `email`, `password`, `wallet`)
VALUES
	(2,'DJ Turner','DJTurner4U@gmail.com','$2a$10$x5e0Mr.SznqpIeBZIqoXNOmZdC3D6vQu.4BQqGnEmU3d.snUQzHWy',22500);


UNLOCK TABLES;

DROP TABLE IF EXISTS `wallet_add`;

CREATE TABLE `wallet_add` (
  `uid` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `dtime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `wallet_add` WRITE;


INSERT INTO `wallet_add` (`uid`, `amount`, `description`, `dtime`)
VALUES
	(2,1500,'From NSU For Contest','2018-07-16'),
	(2,500,'Test','2018-07-16'),
	(2,1000,'Test 2','2018-07-16'),
	(2,1000,'Test 3','2018-07-16'),
	(2,1000,'Test 4','2018-07-16'),
	(2,2000,'Testing From Another Page','2018-07-16'),
	(8,10000,'From Home For House Rent','2018-07-20'),
	(2,2000,'Checking new bug fix #FromBank','2018-07-03');


UNLOCK TABLES;


DROP TABLE IF EXISTS `wallet_spent`;

CREATE TABLE `wallet_spent` (
  `uid` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `dtime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `wallet_spent` WRITE;


INSERT INTO `wallet_spent` (`uid`, `amount`, `description`, `dtime`)
VALUES
	(2,2000,'Movie with Friends','2018-07-11'),
	(2,30,'Rickshaw','2018-07-12'),
	(2,970,'Checking','2018-07-11'),
	(2,1500,'Checking From Another Page','2018-07-12');


UNLOCK TABLES;


DROP TABLE IF EXISTS `withdraw`;

CREATE TABLE `withdraw` (
  `uid` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `wallet` tinyint(1) DEFAULT NULL,
  `dtime` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `withdraw` WRITE;


INSERT INTO `withdraw` (`uid`, `bid`, `amount`, `description`, `wallet`, `dtime`)
VALUES
	(2,3,1000,'Withdraw Check',1,'2018-07-11'),
	(2,2,15000,'Candy',1,'2018-07-11'),
	(2,2,95000,'Field Trip',0,'2018-07-11'),
	(2,4,2000,'Birthday Present for Friend',1,'2018-07-12'),
	(2,2,2000,'Checking new bug fix',1,'2018-07-11');


UNLOCK TABLES;
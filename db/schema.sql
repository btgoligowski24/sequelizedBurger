CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
    );
    
    SELECT * FROM burgers;
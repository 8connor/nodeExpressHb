USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(4000) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
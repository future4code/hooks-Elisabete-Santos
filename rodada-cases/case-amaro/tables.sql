CREATE TABLE
    amaro_users (
        id VARCHAR(80) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(7) DEFAULT "NORMAL"
    );

CREATE TABLE
    amaro_products(
        id VARCHAR(80) PRIMARY KEY,
        name VARCHAR(100) NOT NULL
    );

CREATE TABLE
    amaro_tags(
        tag_id VARCHAR(80) PRIMARY KEY,
        tag VARCHAR(40),
        product_id VARCHAR(80) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES amaro_products(id)
    );
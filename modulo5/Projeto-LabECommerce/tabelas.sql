CREATE TABLE
    labecommerce_user(
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(25) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(25) NOT NULL UNIQUE
    );

CREATE TABLE
    labecommerce_products(
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(25) NOT NULL,
        price DOUBLE NOT NULL,
        image_url VARCHAR(255)
    );

CREATE TABLE
    labecommerce_purcheses(
        id VARCHAR(100) PRIMARY KEY,
        user_id Varchar(100) NOT NULL,
        product_id VARCHAR(100) NOT NULL,
        quantity INT NOT NULL,
        total_price DOUBLE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labecommerce_user(id),
        FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
    )
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, surname, email, password) VALUES
('Alice', 'Smith', 'alice@example.com', 'hashed_password_1'),
('Bob', 'Johnson', 'bob@example.com', 'hashed_password_2'),
('Charlie', 'Brown', 'charlie@example.com', 'hashed_password_3');

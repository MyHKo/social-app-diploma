CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    bio VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    token TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS subscriptions (
    subscriber_id INTEGER NOT NULL,
    subscribee_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (subscriber_id, subscribee_id),
    FOREIGN KEY (subscriber_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (subscribee_id) REFERENCES users(id) ON DELETE CASCADE,
    CHECK (subscriber_id <> subscribee_id)
);

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,     
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS likes (
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, post_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    CHECK (user_id <> post_id)
);

INSERT INTO users (name, surname, username, bio, password) VALUES
('Alice', 'Smith', 'alice_the_best', 'Lover of tech cats and coffee', 'hashed_password_1'),
('Bob', 'Johnson', 'bobius', 'I eat mushrooms', 'hashed_password_2'),
('Charlie', 'Brown', 'charlie22', '', 'hashed_password_3');


INSERT INTO subscriptions (subscriber_id, subscribee_id, created_at) VALUES
(1, 2, CURRENT_TIMESTAMP),
(3, 1, CURRENT_TIMESTAMP);

INSERT INTO posts (user_id, title, body, created_at) VALUES
(3, 'My First Post', 'This is the body of my first post.', CURRENT_TIMESTAMP),
(3, 'My Second Post', 'This is the body of my second post.', CURRENT_TIMESTAMP);

INSERT INTO comments (post_id, user_id, body, created_at) VALUES
(1, 1, 'Great post! Really enjoyed reading it.', CURRENT_TIMESTAMP),
(1, 2, 'I disagree with your point, but interesting take!', CURRENT_TIMESTAMP);




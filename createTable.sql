CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  description VARCHAR(255)
); 
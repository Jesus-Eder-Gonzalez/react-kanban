DROP DATABASE react_kanban;
DROP USER react_kanban_user;

CREATE USER react_kanban_user WITH PASSWORD 'password';

CREATE DATABASE react_kanban  WITH OWNER  react_kanban_user;

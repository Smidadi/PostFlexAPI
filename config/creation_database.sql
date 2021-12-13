CREATE DATABASE PostFlex;

CREATE TABLE sprint (
    id INT PRIMARY KEY NOT NULL PRIMARY KEY,
    date_debut DATE,
    date_fin DATE
);

CREATE TABLE colonne (
    id INT NOT NULL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    id_sprint INT NOT NULL,
    max_tache INT NOT NULL DEFAULT 10,
);

CREATE TABLE post_it (
    id INT PRIMARY KEY NOT NULL PRIMARY KEY,
    couleur VARCHAR(7),
    description VARCHAR(255),
    date_creation DATE,
    estimation_temp INT NOT NULL
);

CREATE TABLE projet (
    name VARCHAR(255) NOT NULL,
    id INT NOT NULL PRIMARY KEY
);

CREATE TABLE projets_with_users (
    id_projet INT NOT NULL,
    id_user INT NOT NULL
);

CREATE TABLE users (
    name VARCHAR(255) NOT NULL,
    id INT NOT NULL PRIMARY KEY,
    mdp VARCHAR(255) NOT NULL
);
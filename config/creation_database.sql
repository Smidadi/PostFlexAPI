CREATE DATABASE PostFlex;

CREATE TABLE sprint (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    date_debut DATE,
    date_fin DATE
);

CREATE TABLE colonne (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    id_sprint INT NOT NULL,
    max_tache INT NOT NULL DEFAULT 10
);

CREATE TABLE post_it (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    id_colonne VARCHAR(255) NOT NULL,
    couleur VARCHAR(255),
    description VARCHAR(255),
    date_creation DATE,
    estimation_temp INT NOT NULL
);

CREATE TABLE projet (
    name VARCHAR(255) NOT NULL,
    id INT NOT NULL PRIMARY KEY
);

CREATE TABLE projets_with_users (
    id_projet VARCHAR(255) NOT NULL,
    id_user VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    name VARCHAR(255) NOT NULL,
    id INT NOT NULL PRIMARY KEY,
    mdp VARCHAR(255) NOT NULL
);
CREATE DATABASE PostFlex;

CREATE TABLE sprint (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    date_debut DATE,
    date_fin DATE
);

CREATE TABLE colonne (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    id_sprint VARCHAR(255) NOT NULL,
    max_tache INT NOT NULL DEFAULT 10
);

CREATE TABLE post_it (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
<<<<<<< HEAD
=======
    id_colonne VARCHAR(255) NOT NULL,
    titre VARCHAR(255),
>>>>>>> 80524d31d0d6773825b97e44352e8fc4250dfeb5
    couleur VARCHAR(255),
    description VARCHAR(255),
    date_creation VARCHAR(255),
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
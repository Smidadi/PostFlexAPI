CREATE DATABASE PostFlex;

CREATE TABLE Sprint (
    id INT PRIMARY KEY NOT NULL,
    date_debut DATE,
    date_fin DATE
);

CREATE TABLE Colonne (
    titre VARCHAR(255) NOT NULL,
    id_sprint INT NOT NULL,
    max_tache INT NOT NULL DEFAULT 10,
);

CREATE TABLE Post_it (
    id INT PRIMARY KEY NOT NULL,
    couleur VARCHAR(7),
    description VARCHAR(255),
    date_creation DATE,
    estimation_temp INT NOT NULL
);
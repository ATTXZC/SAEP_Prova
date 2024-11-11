CREATE DATABASE Sabores_Br;
USE Sabores_Br;

CREATE TABLE Users (
    Id_User INT PRIMARY KEY AUTO_INCREMENT,
    Nome_User VARCHAR(255),
    Senha_User VARCHAR(255),
    email VARCHAR(255),
    createdAT_User DATE,
    updatedAt_User DATE
);

CREATE TABLE LikesAndDeslikes (
    Id_LikeAndDeslikes INT PRIMARY KEY AUTO_INCREMENT,
    Likes TINYINT DEFAULT 0,
    Deslikes TINYINT DEFAULT 0 
);

CREATE TABLE Comentarios (
    Id_Comentarios INT PRIMARY KEY AUTO_INCREMENT,
    Commentt TEXT,
    Id_User INT,
    FOREIGN KEY (Id_User) REFERENCES Users(Id_User)
);

CREATE TABLE Enterprises (
    Enterprise_ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome_Ent VARCHAR(255),
    createdAT_Ent DATE,
    updatedAt_Ent DATE
);

CREATE TABLE Publicacao (
    Id_Publicacao INT PRIMARY KEY AUTO_INCREMENT,
    titulo_comida VARCHAR(255),
    local_rest VARCHAR(255),
    cidade VARCHAR(255),
    Enterprise_ID INT,
    FOREIGN KEY (Enterprise_ID) REFERENCES Enterprises(Enterprise_ID)
);

INSERT INTO Users (Nome_User, Senha_User, email, createdAT_User, updatedAt_User)
VALUES 
('João Silva', 'senha123', 'joao@example.com', '2024-01-01', '2024-01-01'),
('Maria Santos', 'senha456', 'maria@example.com', '2024-02-01', '2024-02-01'),
('Pedro Oliveira', 'senha789', 'pedro@example.com', '2024-03-01', '2024-03-01');

INSERT INTO LikesAndDeslikes (Likes, Deslikes)
VALUES
(9, 1),
(15, 3),
(20, 2);

INSERT INTO Comentarios (Commentt, Id_User)
VALUES
('Ótima comida!', 1),
('Gostei muito do ambiente.', 2),
('Serviço excelente!', 3);

INSERT INTO Enterprises (Nome_Ent, createdAT_Ent, updatedAt_Ent)
VALUES
('Restaurante Sabor do Brasil', '2024-01-01', '2024-01-01'),
('Comida Caseira da Maria', '2024-02-01', '2024-02-01'),
('Churrascaria do Pedro', '2024-03-01', '2024-03-01');

INSERT INTO Publicacao (titulo_comida, local_rest, cidade, Enterprise_ID)
VALUES
('Frango com molho especial', 'Local 01', 'Maceió-AL', 1),
('Feijoada completa', 'Local 02', 'Recife-PE', 2),
('Picanha na brasa', 'Local 03', 'São Paulo-SP', 3);

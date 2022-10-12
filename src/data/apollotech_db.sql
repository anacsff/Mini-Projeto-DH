DROP DATABASE IF EXISTS apollotech_db;

-- Cria banco de dados
CREATE DATABASE IF NOT EXISTS apollotech_db;

-- Seleciona banco de  dados 
USE apollotech_db;

-- Cria tabela de cursos
CREATE TABLE cursos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nome_curso VARCHAR(50)
);

SELECT * FROM cursos;

-- Inserindo cursos na tabela cursos
INSERT INTO cursos  (nome_curso)
VALUES
	("Desenvolvimento Web"),
    ("Desenvolvimento Android Mobile"),
    ("Desenvolvimento Back-end"),
    ("Segurança da Informação"),
    ("UX/UI Designer");
    
-- Cria tabela de alunos
CREATE TABLE alunos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
	data_nascimento DATE NOT NULL,
    celular VARCHAR(11) NOT NULL,
    curso_id INT UNSIGNED,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

INSERT INTO alunos (nome, email, data_nascimento, celular, curso_id)
VALUES
	("Ana Carolina de Souza Fonseca", "anacsfonseca@hotmail.com.br", "1998-10-08", "11934698231", 1),
    ("Inês de Souza", "mi.souza2011@gmail.com", "1968-07-08", "11933543675", 2),
    ("Nicollas Geronassi da Silva", "nicollasgs@gmail.com", "2004-02-04", "11913523160", 5),
    ("Duda Souza", "mariadudinha2010@hotmail.com", "2010-08-17", "11934689213", 4);
    
SELECT * FROM alunos;

-- Lista de cursos concatenado com alunos
SELECT * FROM cursos
INNER JOIN alunos ON cursos.id = alunos.curso_id;




use proyectofinal;
create table usuario(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    username VARCHAR(40) NOT NULL UNIQUE,
    pass VARCHAR(225) NOT NULL,
    birth DATE NOT NULL,
    sex VARCHAR(20) NOT NULL
);

create table comics(
    comic_id INT UNSIGNED AUTO_INCREMENT,
    user_id INT NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    date DATE NOT NULL,
    sinopsis VARCHAR(400) NOT NULL,
    editorial VARCHAR(30) NOT NULL,
    PRIMARY KEY (comic_id),
    FOREIGN KEY (user_id) REFERENCES usuario(id)

);



const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "proyectofinal"
});

conn.connect(
  err => {
    if(err){
      console.log("Error al conectarse a la DB");
    } else {
      console.log("Conectado a la DB exitosamente");
    }
  }
);

module.exports = conn;

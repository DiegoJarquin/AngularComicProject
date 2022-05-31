const conn = require("../../config/database");
const jwt = require("jsonwebtoken");
const secretKey = "llavedeprueba";
// const validarToken = require("../../config/dbproyfinal");
var bodyParser = require('body-parser');
const { ver, usr } = require("../../config/dbproyfinal");


var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get("/test", (req, res) => {
    res.status(200).json({prueba: "test"});
  });


  app.post("/login", (req,res) => {
    // console.log((req.body.username));
    let consulta = `SELECT id, name, username, pass FROM usuario WHERE username = '${req.body.username}' AND pass = '${req.body.pass}'`;
    // console.log(consulta);

    conn.query(consulta, (err, rows, cols) => {
      if(err){
        res.status(500).json({status: 0, mensaje: "Error en base de datos"});
      }else {
        if(rows.length > 0){

          // console.log(rows);
          var data = rows.map(t=>t.id);
          var userid = Number(data);
          // console.log(userid);
          usrid = userid;

          const token = jwt.sign({username: req.body.username,user_id:userid}, secretKey, { expiresIn: "2h"});
          // console.log(usr(token));

          res.json({status:1, mensaje: "usuario exitoso", key: token});
        } else {
          res.status(400).json({status:0, mensaje: "No se encontro usuario que coincida con la clave"});
        }
      }
    });
  });

  app.get("/comics", ver, ( req, res) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    let usrid = usr(token);
    let consulta = `SELECT comic_id, user_id, nombre, date, sinopsis, editorial FROM comics WHERE user_id = ${usrid}`;
    // console.log(consulta);
    conn.query(consulta, (err, rows, cols)=>{
      if(err){
        res.json({status:0,mensaje:"Error en consulta"});
      }else {
        res.json({status:1,mensaje:"Exito en consulta", data:rows})
      }
    });

  });

  app.post("/agregar", (req, res)=>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    let usrid = usr(token);
    let consulta = `INSERT INTO comics (user_id, nombre,date, sinopsis, editorial) VALUES ('${usrid}','${req.body.nombre}','${req.body.date}','${req.body.sinopsis}','${req.body.editorial}')`;
    conn.query(consulta, (err, rows)=>{
      if (err) {
        console.log(consulta);
        res.json({status: 0, mensaje: "Error en insercion", datos: []});
      } else {
        res.json({status: 1, mensaje: "Dato insertado satisfactoriamente", datos:[`${req.body}`]});
      }
    });
  });

  app.post("/registro", (req, res)=>{

    let consulta = `INSERT INTO usuario (name, username,pass, birth, sex) VALUES ('${req.body.name}','${req.body.username}','${req.body.pass}','${req.body.birth}','${req.body.sex}')`;
    conn.query(consulta, (err, rows)=>{
      if (err) {
        console.log(consulta);
        res.json({status: 0, mensaje: "Error en creación de usuario", datos: []});
      } else {
        res.json({status: 1, mensaje: "Usuario insertado satisfactoriamente", datos:[`${req.body}`]});
      }
    });
  });

  app.delete("/del", (req, res)=>{
    const id = req.body.comic_id || req.query.comic_id || req.headers["x-access-id"];
    let consulta = `DELETE FROM comics WHERE comic_id = '${id}'`;
    // console.log(consulta);
    conn.query(consulta, (err, rows)=>{
      if (err) {
        console.log(consulta);
        res.json({status: 0, mensaje: "Error en eliminacion", datos: []});
      } else {
        res.json({status: 1, mensaje: "Dato eliminado satisfactoriamente", datos:[`${req.body}`]});
      }
    });
  });

  app.post("/edit", (req, res)=>{
    let consulta = `UPDATE comics SET nombre = '${req.body.nombre}',date = '${req.body.date}', sinopsis = '${req.body.sinopsis}', editorial = '${req.body.editorial}' WHERE comic_id = '${req.body.comic_id}'`;
    conn.query(consulta, (err, rows)=>{
      if (err) {
        console.log(consulta);
        res.json({status: 0, mensaje: "Error en modificacion", datos: []});
      } else {
        res.json({status: 1, mensaje: "Dato modificado satisfactoriamente", datos:[`${req.body}`]});
      }
    });
  });

}



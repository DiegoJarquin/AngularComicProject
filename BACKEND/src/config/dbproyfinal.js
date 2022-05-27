const dbproyfinal = require("jsonwebtoken");

const secretKey = "llavedeprueba";
// var userid = 5;
function usr(tkn) {
  const decoded = dbproyfinal.verify(tkn, secretKey);
  let userid = Number(decoded.user_id);
  return userid;
}

const verifyToken = (req, res, next) => {

  const token = req.body.token || req.query.token || req.headers["x-access-token"];
  if(!token){
    return res.status(403).json({status: 0, mensaje: "Token necesario para acceder"});
  }
  try {
    const decoded = dbproyfinal.verify(token, secretKey);
    // usr(decoded);
    // console.log(Number(decoded.user_id));
    // userid = Number(decoded.user_id);

  } catch (err) {
    return res.status(401).json({status: 0, mensaje: "Token invalido"});
  }
  return next();
};


module.exports = {ver: verifyToken, usr: function usr(tkn) {
    const decoded = dbproyfinal.verify(tkn, secretKey);
    let userid = Number(decoded.user_id);
    return userid;
  }};
// module.exports = verifyToken;

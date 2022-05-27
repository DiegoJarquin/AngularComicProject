const app = require("./src/config/server");
require("./src/app/rutas/acceso")(app);


app.listen(app.get("port"), () => console.log("Servidor corriendo en el puerto 4000"));

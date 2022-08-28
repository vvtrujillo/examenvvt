const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

//Desde aca coloca,ps ñas rutas y la conexion con la BD
require('./Config/mongo.config');
require('./Routes/proyecto.route')(app);

app.listen(port, () => console.log('Servidor arriba en el puerto ' + port));
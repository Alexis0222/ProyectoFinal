const express=require('express');
const path=require('path');
const fs=require('fs');
const proyecto=require("./routes/proyecto_crud");

const cookieParser=require('cookie-parser');
const port=3000;

var app=express();
const DOMINIO_PERMITIDO_CORS = "http://localhost:4200",
  DIRECTORIO_FOTOS = path.join(__dirname, "fotos_personas"),
  DIRECTORIO_DIST = path.join(__dirname, "dist");
  
  app.use("/foto_persona", express.static(DIRECTORIO_FOTOS));
  // Estático
  app.use("/", express.static(DIRECTORIO_DIST));
  
  if (!fs.existsSync(DIRECTORIO_FOTOS)) {
    fs.mkdirSync(DIRECTORIO_FOTOS);
  }
  app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", DOMINIO_PERMITIDO_CORS);
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "DELETE");
    next();
  });
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/proyecto',proyecto);
app.listen(port,function(){

    console.log('Example app ruta:localhost:'+port)
})
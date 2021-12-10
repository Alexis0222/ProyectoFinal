const express=require('express');
const app=express.Router();
const personaModel = require("../models/persona_model")
const path = require("path")
const formidable=require('formidable');
const fs = require("fs")
const {v4: uuidv4} = require("uuid")
const DIRECTORIO_FOTOS= path.join("C:\\Users\\Casa\\Desktop\\proyectoCRUD\\ParteExpress\\fotos_personas");

app.post('/fotos_persona', (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: DIRECTORIO_FOTOS,
  });

  form.parse(req, async (err, fields, files) => {
    const id_persona = fields.id_persona;
    console.log(id_persona);
    console.log(fields)
    console.log(files)
    for (let clave in files) {
      const file = files[clave];
      const nombreArchivo = file.name;
      await personaModel.agregarFoto(id_persona, nombreArchivo)
    }
  });

  form.on("fileBegin", (name, file) => {
    const extension = path.extname(file.name);
    const nuevoNombre = uuidv4().concat(extension);
    file.path = path.join(DIRECTORIO_FOTOS, nuevoNombre);
    file.name = nuevoNombre;
  })

  form.on("end", () => {
    res.json({
      respuesta: true,
    })
  })

});
app.post('/editar_foto_de_persona', (req, res) => {
  const form = formidable({
    multiples: true,
    uploadDir: DIRECTORIO_FOTOS,
  });

  form.parse(req, async (err, fields, files) => {
    const id_persona = fields.id_persona;
    console.log(id_persona);
    console.log(fields)
    console.log(files)
    for (let clave in files) {
      const file = files[clave];
      const nombreArchivo = file.name;
      await personaModel.actualizarFoto(id_persona, nombreArchivo)
    }
  });

  form.on("fileBegin", (name, file) => {
    const extension = path.extname(file.name);
    const nuevoNombre = uuidv4().concat(extension);
    file.path = path.join(DIRECTORIO_FOTOS, nuevoNombre);
    file.name = nuevoNombre;
  })

  form.on("end", () => {
    res.json({
      respuesta: true,
    })
  })

});
  
  app.post('/persona', async (req, res) => {
    const persona = req.body;
    const respuesta = await personaModel.insertar(persona.nombre,persona.edad,persona.ubicacion,persona.acerca_de_mi,persona.perfil);
    personaModel.insertarpuntaje(respuesta);
    res.json(respuesta);
  });
  
  app.get('/personas', async (req, res) => {
    const personas = await personaModel.obtener();
    res.json(personas);
  });
  app.get('/personas_con_fotos', async (req, res) => {
    const personas = await personaModel.obtenerConFotos();
    res.json(personas);
  });
  
  app.get('/persona', async (req, res) => {
    if (!req.query.id) {
      res.end("not found");
      return;
    }
    const persona = await personaModel.obtenerPorId(req.query.id);
    persona.fotos = await personaModel.obtenerFotos(req.query.id);
    persona.like= await personaModel.obtenerpuntaje(req.query.id);
    console.log(persona)
    res.json(persona);
  }); 
  app.get('/persona/editar', async (req, res) => {
    if (!req.query.id) {
      res.end("not found");
      return;
    }
    const persona = await personaModel.obtenerPorId(req.query.id);
    console.log("editar"+persona)
    res.json(persona);
  }); 
  app.post("/actualizarPersona",async(req,res)=>{
    const persona=req.body;
    
       
  const respuesta= await personaModel.actualizar(persona.id_personas,persona.nombre,persona.edad,persona.ubicacion,persona.acerca_de_mi,persona.perfil);

    res.json(respuesta);
  }); app.post("/actualizarFoto",async(req,res)=>{
    const persona=req.body;
  const respuesta= await personaModel.actualizarFoto(persona.id_persona,persona.foto);

    res.json(respuesta);
  });
  app.delete("/persona", async (req, res) => {

    if (!req.query.id) {
      res.end("Not found");
      return;
    }
    const idpersona = req.query.id;
    await personaModel.eliminar(idpersona);
    res.json(true);
  });
 
 
  app.post("/actualizarlikes",async(req,res)=>{
    const persona=req.body;
  const respuesta= await personaModel.actualizarPuntaje(persona.id_persona,persona.likes,persona.dislikes)
    res.json(respuesta);
  });
  module.exports=app;
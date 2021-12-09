const { query } = require("express");
const conexion=require("../config/conexion")
module.exports={
    
 

    insertar(nombre,edad,ubicacion,acerca_de_mi,perfil){

        return new Promise((resolve,reject) => {
    
            conexion.query('insert into personas (nombre,edad,ubicacion,acerca_de_mi,perfil)'+
           ' values (?,?,?,?,?)',[nombre,edad,ubicacion,acerca_de_mi,perfil],(err,resultado) => {
               if (err)reject(err);
               else resolve(resultado.insertId)
           })
        })
    
    },
    insertarpuntaje(id_persona){
        return new Promise((resolve,reject) => {
    
            conexion.query('insert into puntaje_personas (id_persona,likes,dislikes)'+
           ' values (?,0,0)',[id_persona],(err,resultado) => {
               if (err)reject(err);
               else resolve(resultado)
           })
        })
    },
    obtenerpuntaje(id_persona){
        return new Promise((resolve,reject)=>{
    
    
            conexion.query('select id_persona,likes,dislikes from puntaje_personas where id_persona=?',[id_persona],(err,resultados)=>{
    
                if(err)reject(err);
                else resolve(resultados);
            })
    
        })
    
    }, actualizarPuntaje(id_persona,likes,dislikes){
  
        return new Promise((resolve,reject)=>{
            conexion.query('update puntaje_personas set likes=?,dislikes=? where id_persona=?',[likes,dislikes,id_persona],(err,resultados)=>{
           if(err)reject(err);
           else resolve(resultados);     
            })
        })
    },

    obtener(){
    
        return new Promise((resolve,reject)=>{
    
    
            conexion.query('select id_personas, nombre, edad, ubicacion, acerca_de_mi, perfil from personas',(err,resultados)=>{
    
                if(err)reject(err);
                else resolve(resultados);
            })
    
        })
    
    
    },
    actualizar(id,nombre,edad,ubicacion,acerca_de_mi,perfil){
    
        return new Promise((resolve,reject)=>{
            conexion.query('update personas set nombre =?,'+
            'edad=?, ubicacion=?, acerca_de_mi=?, perfil=? where id_personas=?',[nombre,edad,ubicacion,acerca_de_mi,perfil,id], (err)=>{
                if(err)reject(err);
                else resolve();
            })
        })
    },
    actualizarFoto(id_persona,foto){
        return new Promise((resolve,reject)=>{
            conexion.query('update fotos_personas set foto=? where id_persona=?',[foto,id_persona],(err)=>{
           if(err)reject(err);
           else resolve();     
            })
        })
    },
    eliminar(id){
        //TODO - Agregar borrado de fotos
    
        return new Promise(async (resolve,reject)=>{
            const fotos=await this.obtenerFotos(id)
            for(let i=0;i<fotos.length;i++){
                console.log(__dirname)
                //await fs.unlinkSync(path.join(__dirname,"fotos_productos",fotos[i].foto))
            }
            
            conexion.query('delete from fotos_personas where id_persona =?',[id],
            (err)=>{
                if(err)reject(err);
                else resolve();
            })

            conexion.query('delete from puntaje_personas where id_persona =?',[id],
            (err)=>{
                if(err)reject(err);
                else resolve();
            })
            conexion.query('delete from personas where id_personas =?',[id],
            (err)=>{
                if(err)reject(err);
                else resolve();
            })
        })
    },
    agregarFoto(id_persona,nombreFoto){
    
        return new Promise((resolve,reject)=>{
    
            conexion.query('insert into fotos_personas (id_persona,foto) '+
            'values  (?,?)',[id_persona,nombreFoto],(err,resultados)=>{
                if(err)reject(err);
                else resolve(resultados.insertId);
            })
        })
    },
    obtenerFotos(id_persona){
        return new Promise((resolve, reject) => {
            conexion.query('select id_persona, foto from fotos_personas '+
             'WHERE id_persona = ?',[id_persona],
             (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
              })
        })
    },
    
    obtenerPorId(id){
        return new Promise((resolve, reject) => {
    
            conexion.query('select id_personas,nombre, edad, ubicacion, acerca_de_mi, perfil'+
            ' from personas where id_personas=?',[id],
            (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados[0]);
              })
        })
    
    
    },
    obtenerPrimerFoto(id_Persona){
        return new Promise((resolve, reject) => {
            conexion.query('select foto from fotos_personas where id_persona = ? limit 1',
            [id_Persona],
            (err, resultados) => {
              if (err) reject(err);
              else {
               if( resultados.length>0){
                resolve(resultados[0].foto);
            }else{
                resolve('nohay.png');
            }
            }
            });
        })
    
    },
    obtenerConFotos(){
    
        return new Promise((resolve,reject) => {
    
            conexion.query('select *  from personas',
            async(err,resultados) =>{
    
                if(err)reject(err)
                else {
                    for(let x=0;x<resultados.length;x++){
                        fotoAux=await this.obtenerPrimerFoto(resultados[x].id_personas)
                    
                        if(fotoAux){
                            resultados[x].foto= fotoAux;
                        }else{
                            resultados[x].foto= 'nohay.png'
                        }
                       
                    }
                    resolve(resultados)
                }
            }
            )
        })
    }
    }
    


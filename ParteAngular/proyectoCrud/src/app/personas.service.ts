import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Persona } from './persona';
import { Foto } from './foto';
import { Puntaje } from './puntaje';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http:HttpService) { }
  public async obtenerPersonas(){
    return await this.http.get("/personas");
  }
  public async eliminarPersona(id_personas: number) {
    console.log(id_personas);
    return await this.http.delete("/persona?id=".concat(id_personas.toString()));
  }
  public async agregarPersona(persona:Persona){
    return await this.http.post("/persona",persona);
  }
  public async agregarFotosDePersona(fotos:FormData){
    return await this.http.formdata("/fotos_persona",fotos);

  }
  public async obtenerPersonasConFotos(){
    return await this.http.get("/personas_con_fotos");

  }
  public async obtenerPersonasConFotosPorId(id_personas:string){

    return await this.http.get("/persona?id=".concat(id_personas));
  }
  public async actualizarPuntaje(puntaje:Puntaje){
    return await this.http.post("/actualizarlikes",puntaje)
  }
  public async editarPersona(id_personas: string){
    return await this.http.get("/persona/editar?id=".concat(id_personas));
  }
  public async guardarEdicionPersona(persona:Persona){
    return await this.http.post("/actualizarPersona",persona);
  }
  public async editarFotoDePersonas(fotos:FormData){
    return await this.http.formdata("/editar_foto_de_persona",fotos);

  }
}

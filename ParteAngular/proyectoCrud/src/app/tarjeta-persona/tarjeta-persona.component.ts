import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.css']
})
export class TarjetaPersonaComponent implements OnInit {
@Input() persona:any;

  constructor(private router:Router) { }


  ngOnInit(): void {
  }

  public resolverRuta(){
    const baseUrl=environment.imagenUrl;
    return `${baseUrl}foto_persona/${this.persona.foto}`;

  }

  public detalles(){
    this.router.navigate(["/persona/",this.persona.id_personas]);
  }

}

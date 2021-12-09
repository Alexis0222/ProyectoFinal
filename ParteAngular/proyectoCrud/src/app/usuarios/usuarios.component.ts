import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
public personas=[];
  constructor(private personasService:PersonasService) { }

  async ngOnInit() {
  this.personas=await this.personasService.obtenerPersonasConFotos();
  }

}

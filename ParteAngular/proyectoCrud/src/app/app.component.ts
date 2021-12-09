import { Component } from '@angular/core';
import { Persona } from './persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoCrud';
public personas:Persona[]=[];
  constructor(){}

  ngOnInit(): void{

}
}

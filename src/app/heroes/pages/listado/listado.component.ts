import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interfaces';
import { PersonajesService } from '../../services/personajes.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles:[ `

  .title{
    text-align: center;
    font-size: 25px;
  }
  .paginacion{
    text-align: center;
  }
  body{

  }

  button{
    color: #FFFF
  }
 mat-divider{
   background-color: white;
   
 }
  mat-card{
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    
  }
  h4{
    color: #c49c10
  }
  .mat-drawer-content {
    position: relative;
    z-index: 1;
    display: block;
    height: 100%;
    overflow: hidden;
}
`]
  
})
export class ListadoComponent implements OnInit {

  personajes: Personaje [] = [];
 public page: number = 1;

  constructor(private personajeServices: PersonajesService) { }

  ngOnInit(): void {
    
    this.personajeServices.getPersonajes()
    .subscribe(personajes => this.personajes =personajes );
  
  }

}

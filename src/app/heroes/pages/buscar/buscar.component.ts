import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hechizos } from '../../interfaces/hechizos.interfaces';
import { Personaje } from '../../interfaces/personaje.interfaces';
import { PersonajesService } from '../../services/personajes.service';
import { Peliculas } from '../../interfaces/peliculas.interfaces';
import { Libros } from '../../interfaces/libros.interfaces';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles:[`
      .container{
        align-items: flex-start;
        margin-right:10px;
      }

      .ListaPersonajes, .ListaHechizos, .ListaPeliculas, .ListaLibros{
        list-style-type: none;
        padding-right: 300px;
      }
      

      
  `]

})
export class BuscarComponent implements OnInit {

  hechizos: Hechizos [] = [];
  personajes: Personaje [] = [];
  peliculas: Peliculas [] = [];
  libros: Libros [] = [];
  ensenar: boolean = false

  constructor(private personajeServices : PersonajesService) { }

  ngOnInit(): void {
  }
  
  buscar(textobusqueda: string){
    this.personajeServices.getBusqueda(textobusqueda.trim())
    .subscribe(result => {
    this.personajes = result.resultadoPersonajes;
    this.hechizos = result.resultadoHechizos;
    this.peliculas = result.resultadoPeliculas
    this.libros = result.resultadoLibros
    })
   
  }

 


  


}

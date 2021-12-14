import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Peliculas } from '../../interfaces/peliculas.interfaces';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: [`

    .titulo{
       font-size: 30px;
       margin-bottom: 10px;
    
  }

`]
 
})
export class PeliculasComponent implements OnInit {

  peliculas: Peliculas[] = [];
  page: number = 1;

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.personajeService.getPeliculas()
    .subscribe( peliculas => this.peliculas = peliculas );
  }

}

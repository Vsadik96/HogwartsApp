import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/heroes/services/personajes.service';
import { Libros } from '../../../interfaces/libros.interfaces';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: [`

h2{
  color: #c49c10
}

mat-card-title{

  color: #c49c10
}
.titulo{
      
       left: 70px;
       font-size: 30px;
       margin-bottom: 10px;
    
  }

  `]
})
export class LibrosComponent implements OnInit {

  libros: Libros[] = [];
  public page: number = 1;


  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.personajeService.getLibros()
    .subscribe( libros => this.libros =libros );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../../interfaces/personaje.interfaces';
import {switchMap} from 'rxjs/operators';
import { PersonajesService} from '../../services/personajes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './personaje.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
  .historia{
    font-size: 20px
  }

  .casa{
    font-size: 15px
  }
`]

})
export class PersonajeComponent implements OnInit {

  personaje!: Personaje;

  constructor(private activatedRoute: ActivatedRoute,
    private personajeservice: PersonajesService,
    private router: Router) { }

    

  ngOnInit(): void {
    
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.personajeservice.getPersonajesPorId(id)) 
    ) 
    .subscribe(personaje => this.personaje = personaje );  
  }

  regresar(){
    this.router.navigate(['/personajes/listado']);
  }

}

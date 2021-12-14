import { Component, OnInit } from '@angular/core';
import { Hechizos } from '../../../interfaces/hechizos.interfaces';
import { PersonajesService } from '../../../services/personajes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-hechizos',
  templateUrl: './hechizos.component.html',
  styles:[`
  .example-box.cdk-drag-animating {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.example-chip .cdk-drop-list-dragging {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
 `]

  
  
})
export class HechizosComponent implements OnInit {

  hechizos: Hechizos[] = [];

  drop(event: CdkDragDrop<Hechizos[]>) {
    moveItemInArray(this.hechizos, event.previousIndex, event.currentIndex);
  }

  constructor(private personajeServices: PersonajesService,
                private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.personajeServices.getHechizos()
    .subscribe( hechizos => this.hechizos = hechizos );
  

    
  }




  



  }



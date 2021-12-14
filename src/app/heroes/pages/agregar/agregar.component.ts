import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasaDeHogwarts, Personaje } from '../../interfaces/personaje.interfaces';
import { PersonajesService } from '../../services/personajes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../component/components/confirmarpersonaje/confirmar.component';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
        img {
      width: 60%;
      border-radius: 5px;
    }
button {
  margin-top: 20px;
}
.historia{
  height: 100px;

}

  `]
  
  
})
export class AgregarComponent implements OnInit {

  heroe: Personaje ={
    personaje: '',
    casa_hogwarts: '',
    fecha_nacimiento: '',
    descripcion: '',
    imagen: ''
    
  }

  casa: CasaDeHogwarts [] | undefined;



  constructor(private personajeService: PersonajesService,
             private activatedRoute: ActivatedRoute,
             private router: Router,
             private snackbar:MatSnackBar,
             private dialog: MatDialog
             )
              { }

  ngOnInit(): void {
    if( !this.router.url.includes('editar') ) {
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.personajeService.getPersonajesPorId( id ) )
      )
      .subscribe( heroe => this.heroe = heroe );
  }

  guardar(){
   
    if( this.heroe.personaje.trim().length === 0  ) {
      return;
    }

    if ( this.heroe.id ) {
      // Actualizar
      this.personajeService.actualizarPersonaje( this.heroe )
        .subscribe( heroe => this.mostrarSnakbar('Personaje actualizado'));

    } else {
      // Crear
      this.personajeService.agregarPersonaje( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/personajes/agregar', heroe.id ]);
          this.mostrarSnakbar('Personaje creado');
        })
    }

  }

  borrar(){

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });
    dialog.afterClosed().subscribe(
      (result) => {
  
        if( result ) {
          this.personajeService.borrarPersonaje(this.heroe.id!)
          .subscribe(resp =>{
            this.router.navigate(['/personajes/listado']);
          });
        }
      }
      )
  }



  mostrarSnakbar(mensaje: string){

    this.snackbar.open(mensaje, '',{
    duration: 2500  });

}
}
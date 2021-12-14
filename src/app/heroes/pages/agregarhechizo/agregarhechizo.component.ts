import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmarComponent } from '../../component/components/confirmarhechizo/confirmar.component';
import { Hechizos } from '../../interfaces/hechizos.interfaces';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-agregarhechizo',
  templateUrl: './agregarhechizo.component.html',
  styles: []
})
export class AgregarhechizoComponent implements OnInit {

  
  hechizo: Hechizos ={
    hechizo: '',
    uso: ''
  }

  constructor(private personajeService: PersonajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    if( !this.router.url.includes('agregarhechizo/editar') ) {
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.personajeService.getHechizosPorId( id ) )
      )
      .subscribe( hechizo => this.hechizo = hechizo );
  }

  
  guardar(){
    if( this.hechizo.hechizo.trim().length === 0  ) {
      return;
    }

    if ( this.hechizo.id ) {
      // Actualizar
      this.personajeService.actualizarHechizo( this.hechizo )
        .subscribe( hechizo => this.mostrarSnakbar('Hechizo actualizado'));

    } else {
      // Crear
      this.personajeService.agregarHechizo( this.hechizo )
        .subscribe( hechizo => {
          this.router.navigate(['/personajes/hechizos', hechizo.id ]);
          this.mostrarSnakbar('Hechizo creado');
        })
    }

  }


borrar(){

  const dialog = this.dialog.open( ConfirmarComponent, {
    width: '250px',
    data: this.hechizo
  });

  dialog.afterClosed().subscribe(
    (result) => {

      if( result ) {
        this.personajeService.borrarHechizo(this.hechizo.id!)
        .subscribe(resp =>{
          this.router.navigate(['/personajes/hechizos']);
        });
      }
    }
    )
}

mostrarSnakbar( mensaje: string ) {

  this.snackbar.open( mensaje, 'ok!', {
    duration: 2500
  });


}
}

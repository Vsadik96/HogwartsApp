import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { PersonajeTarjetaComponent } from './component/heroe-tarjeta/personaje-tarjeta.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HechizosComponent } from './pages/hechizos/hechizos/hechizos.component';
import { LibrosComponent } from './pages/libros/libros/libros.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { ImagenPipe } from './pipes/imagen.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { AgregarhechizoComponent } from './pages/agregarhechizo/agregarhechizo.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import {MatSelectModule} from '@angular/material/select';
import { BuscadorComponenteComponent } from './component/buscador-componente/buscador-componente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HechizostarjetaComponent } from './component/hechizos-tarjeta/hechizos-tarjeta.component';
import { PeliculaTarjetaComponent } from './component/pelicula-tarjeta/pelicula-tarjeta.component';
import { LibrosComponentesComponent } from './component/libros-componentes/libros-componentes.component';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AgregarComponent,
    AgregarhechizoComponent,
    BuscarComponent,
    PersonajeComponent,
    HomeComponent,
    ListadoComponent,
    PersonajeTarjetaComponent,
    HechizosComponent,
    LibrosComponent,
    ImagenPipe,
    PeliculasComponent,
    BuscadorComponenteComponent,
    HechizostarjetaComponent,
    PeliculaTarjetaComponent,
    LibrosComponentesComponent

    


  
   
  
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatChipsModule,
    DragDropModule,
    ScrollingModule
  
    
  ]
})
export class PersonajesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { HomeComponent } from './pages/home/home.component';
import { HechizosComponent } from './pages/hechizos/hechizos/hechizos.component';
import { LibrosComponent } from './pages/libros/libros/libros.component';
import { AgregarhechizoComponent } from './pages/agregarhechizo/agregarhechizo.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'hechizos', component: HechizosComponent },
      { path: 'libros', component: LibrosComponent },
      { path: 'peliculas', component: PeliculasComponent },
      { path: 'menu', component: HomeComponent },
      { path: 'agregar', component: AgregarComponent },
      {path: 'agregarhechizo', component: AgregarhechizoComponent },
      {path: 'agregarhechizo/editar/:id', component: AgregarhechizoComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: PersonajeComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class PersonajesRoutingModule { }

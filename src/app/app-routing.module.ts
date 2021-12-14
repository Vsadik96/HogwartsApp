import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  {
    path: 'personajes',
    loadChildren: () => import ('./heroes/personajes.module').then(m => m.PersonajesModule)

  },
  {
    path:'login', 
    component: LoginComponent,
   
  },
  {
    path:'registro',
    component: RegistroComponent
     
  },
  {
    path: 'inicio',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoginComponent,
    RegistroComponent

    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
   
    
  ],
  providers: [CookieService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService,],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }

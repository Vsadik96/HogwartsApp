import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.component.html',
  styles:[`

body, html {
	 height: 100%;
   animation: hue-rotate 6s infinite;
	 background-image: url('https://wallpapercave.com/wp/wp3641444.png');
	 background-size: cover;
}
 body{
  display: flex;
	 overflow: hidden;
}

/*site container*/
.wrapper {
  width: 100%;
  max-width: 600px;
  margin:  auto;
  margin-bottom: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


h1{
  text-align:center;
  padding:30px 0px 0px 0px;
  color:#FFF;
  text-transform:uppercase;
  text-shadow:#000 0px 1px 5px;
  margin:0px;
}


 .form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

input[type="text"],input[type="password"]{
  width:98%;
  padding:15px 0px 15px 8px;
  border-radius:5px;
  box-shadow:inset 4px 6px 10px -4px rgba(0,0,0,0.3), 0 1px 1px -1px rgba(255,255,255,0.3);

  @include disable;
  border:1px solid rgba(0,0,0,1);
  margin-bottom:10px;
  color:#6E6E6E;
  
}
.btnsalir{
  display: flex;
  display: flex;
  align-self: flex-start;
   position: relative;
  left: 100px;
  bottom: 200px;
 
}
.btn{
  width:100%;
  padding:15px;
  border-radius:5px;
  @include disable;
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#28D2DE), to(#1A878F));
  background-image: -webkit-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: -moz-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: -o-linear-gradient(#28D2DE 0%, #1A878F 100%);
  background-image: linear-gradient(#28D2DE 0%, #1A878F 100%);
  color:#FFF;
  text-transform:uppercase;
  text-shadow:#000 0px 1px 5px;
  border:1px solid #000;
}

input:focus{
  box-shadow:inset 4px 6px 10px -4px rgba(0,0,0,0.7), 0 1px 1px -1px rgba(255,255,255,0.3);
  background:rgba(0,0,0,0.3);
  @include easeme;
}

.btn:hover{
  opacity:1;
  cursor:pointer;
}










  `]

})
export class RegistroComponent implements OnInit {
  username: string =''
  password: string  =''
  confirmPassword: string  =''

  constructor(private registroservice: RegistroService,
    private router: Router,
    private snackbar: MatSnackBar,) { }

  ngOnInit(): void {
  }
  register() {
    const user = { username: this.username, password: this.password };

    if(this.confirmarcontraseña(this.password, this.confirmPassword)){
      
    this.registroservice.agregarPersonaje(user).subscribe(data => {
          console.log(data)
          this.mostrarSnakbar('Usuario registrado')
          this.router.navigate(['/inicio'])
        });
    }
    else{
      this.mostrarSnakbar('Las contraseñas no coinciden')
    }
   


  }

  mostrarSnakbar( mensaje: string ) {

    this.snackbar.open( mensaje, '', {
      duration: 2500
    });
  }

  confirmarcontraseña(password: string, confirmPassword: string){
    if(password === confirmPassword){
      return true
    }
    else{
      return false
    }
  }
}


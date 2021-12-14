import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { UsersService } from 'src/app/login/users.service';
import { Users } from '../../../login/login.interfaces';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[ `
   .salir{
     align-self: flex-end;
   }
      .container{
        margin: 10px
      }
      .menu{
        
        height: 100px;
      }
     .titulo{
      text-align: center;
       left: 670px;
       font-size: 30px;
    
     }
     .mat-drawer-content {
    position: relative;
    z-index: 1;
    display: block;
    height: 100%;
    overflow: hidden;
}
  `]
})
export class HomeComponent implements OnInit {

  constructor( private userService: UsersService,
    private jwthelper: JwtHelperService) { }
  users?: Users
  username: string = ''
   

  ngOnInit(): void {
    this.getUserLogged();
    
  }


  getUserLogged() {

    var payload = this.jwthelper.decodeToken(this.userService.getToken())

    if (payload === null){
      this.username = ''
    }
    else{
      this.username = payload.sub
    }

  }

  logout(){

    this.userService.logout()
   window.location.replace('/inicio')
  }
 
  }



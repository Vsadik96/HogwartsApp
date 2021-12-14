import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { UsersService } from './users.service';

@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  
}) 
export class LoginComponent implements OnInit { 
  form!: FormGroup
  username: string = ""
  password: string = ""
  constructor( 
    private userService: UsersService,
    private router: Router, 
    public fb: FormBuilder 
  ) { } 
 
  ngOnInit(): void { 
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

    login() {
      var formData: any = new FormData();
      formData.set("username",this.form.get('username')?.value)
      formData.set("password",this.form.get('password')?.value)
      this.userService.login(formData).subscribe(data => {

        this.userService.setToken(data.access_token)
        this.userService.getUserLogged(data.user.username),
        this.router.navigateByUrl('/personajes/listado')


       
      });
  
  
  }
 

 

  
}


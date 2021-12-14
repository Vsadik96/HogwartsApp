
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";
import { Users } from './login.interfaces';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  
  private baseUrl: string = environment.baseUrl;
  formData = new FormData()

  private logInUser? : Users;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(formData: FormData): Observable<any> {
    return this.http.post(`${ this.baseUrl }/login`, formData);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  
  getUser(username: any): Observable<Users>{
    return this.http.get<Users>(`${ this.baseUrl }/login/${ username }`);
    
  }

  getToken() {
    return this.cookies.get("token");
    
  }

  getUserLogged(username: any) {
    username = this.getToken();
    return this.http.get<Users>(`${ this.baseUrl }/login/${ username }`);
  }

  logout(){
     this.cookies.deleteAll("token")
     this.cookies.delete("token", "/")
  }
  
   error(message: any) {
    return throwError({ error: { message } });
}

  unauthorized() {
    return throwError({ status: 401, error: { message: 'Unauthorised' } });
}
}
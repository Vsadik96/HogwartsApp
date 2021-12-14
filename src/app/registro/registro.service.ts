import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../login/login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { 
    

  }
  agregarPersonaje( usuario: Users ): Observable<Users> {
    return this.http.post<Users>(`${ this.baseUrl }/registro`, usuario );
  }

}

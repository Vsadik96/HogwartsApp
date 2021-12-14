import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/personaje.interfaces';
import { Hechizos } from '../interfaces/hechizos.interfaces';
import { environment } from 'src/environments/environment';
import { Libros } from '../interfaces/libros.interfaces';
import { Peliculas } from '../interfaces/peliculas.interfaces';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {  }
 
  getPersonajes(): Observable<Personaje[]>{
    return this.http.get<Personaje[]>(`${ this.baseUrl }/personajes`);
  }

  getPersonajesPorId(id: string): Observable<Personaje>{
    return this.http.get<Personaje>(`${ this.baseUrl }/personajes/${ id }`);
  }

  getHechizos(): Observable<Hechizos[]>{
    return this.http.get<Hechizos[]>(`${ this.baseUrl }/hechizos/`);
  }

  getBusqueda(busqueda: string): Observable<any>{
    return this.http.get(`${ this.baseUrl }/buscador/${ busqueda }`)
  }
  
  getHechizosPorId(id: string): Observable<Hechizos>{
    return this.http.get<Hechizos>(`${ this.baseUrl }/hechizos/${ id }`);
  }

  getLibros(): Observable<Libros[]>{
    return this.http.get<Libros[]>(`${ this.baseUrl }/libros/`);
  }
  getPeliculas(): Observable<Peliculas[]>{
    return this.http.get<Peliculas[]>(`${ this.baseUrl }/peliculas/`);
  }

  getSugerencias( termino: string): Observable <any>{
    return this.http.get<Personaje[]>(`${ this.baseUrl }/personajes?q=${ termino }&_limit=6`); 
   
  }
  getSugerenciasHechizos( termino: string): Observable < Hechizos[]>{
    return this.http.get<Hechizos[]>(`${ this.baseUrl }/personajes/hechizos?q=${ termino }&_limit=9`)
    
  }

  agregarPersonaje( heroe: Personaje ): Observable<Personaje> {
    return this.http.post<Personaje>(`${ this.baseUrl }/personajes`, heroe );
  }

  actualizarPersonaje( heroe: Personaje): Observable<Personaje> {
    return this.http.put<Personaje>(`${ this.baseUrl }/personajes/${ heroe.id }`, heroe );
  }

  borrarPersonaje( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/personajes/${ id }`);
  }

  agregarHechizo( hechizo: Hechizos): Observable<Hechizos> {
    return this.http.post<Hechizos>(`${ this.baseUrl }/hechizos`, hechizo );
  }

  borrarHechizo( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/hechizos/${ id }`);
  }
  actualizarHechizo( hechizo: Hechizos): Observable<Hechizos> {
    return this.http.put<Hechizos>(`${ this.baseUrl }/hechizos/${ hechizo.id }`,hechizo );
  }




}

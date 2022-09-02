import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { LoginCredentials } from '../Interface/credencial.interface';
import { Paises } from '../Interface/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisesService { 
  
  urlBase: string = "https://restcountries.com/v2/";
  
  constructor(private http: HttpClient) {}
  
  buscarPais(termino: string): Observable<Paises[]>{
    const url: string = `${ this.urlBase }name/${ termino }`

    return this.http.get<Paises[]>(url)
  }

  getPaisPorAlpha( id: string ):Observable<Paises>{
    const url = `${ this.urlBase }/alpha/${ id }`;
    return this.http.get<Paises>( url );
  }
  
  private loggedIn = new BehaviorSubject<boolean>(true); 
  loggedIn$ = this.loggedIn.asObservable();
  
  logIn(credentials: LoginCredentials): void {
    this.loggedIn.next(true);
  }

}
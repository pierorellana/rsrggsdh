import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Paises } from '../Interface/pais.interface';
import { PaisesService } from '../services/pais.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.components.css']  
})
export class LoginComponent {

  paises  : Paises[] = [];

 loginForm = new FormGroup({
  usuario: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),
 });

 constructor( private paisService: PaisesService ){
  localStorage.setItem('ACCESS_TOKEN', 'admin');
 }

 signIn(): void {
  const credentials: any = this.loginForm.value;
  this.paisService.logIn(credentials);
}


}

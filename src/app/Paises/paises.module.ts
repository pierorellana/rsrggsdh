import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DetallesPaisComponent } from './detalles-pais/detalles-pais.component';
import { BuscadorPaisesComponent } from './buscador-paises/buscador-paises..component';


@NgModule({
  declarations: [
    LoginComponent,
    BuscadorPaisesComponent,
    DetallesPaisComponent
  ],
  exports:[
    LoginComponent,
    BuscadorPaisesComponent,
    DetallesPaisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ] 
})
export class PaisesModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BuscadorPaisesComponent } from "./Paises/buscador-paises/buscador-paises..component";
import { DetallesPaisComponent } from "./Paises/detalles-pais/detalles-pais.component";
import { LoginComponent } from './Paises/login/login.component';




const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'paises',
        component: BuscadorPaisesComponent,
        pathMatch: 'full'        
    },
    {
        path: 'paises/:id',
        component: DetallesPaisComponent,
        pathMatch: 'full'
    }
]
    

@NgModule({
        imports:[
            RouterModule.forRoot( routes)
        ],
        exports:[
            RouterModule
        ]
    })
    export class AppRoutingModule{}
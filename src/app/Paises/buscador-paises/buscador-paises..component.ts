import { Component, ElementRef, ViewChild } from '@angular/core';
import { PaisesService } from 'src/app/Paises/services/pais.service';
import { Paises } from '../Interface/pais.interface';


@Component({
  selector: 'app-buscador-paises',
  templateUrl: './buscador-paises.component.html',
  styleUrls: ['./buscador-paises.component.css']
})
export class BuscadorPaisesComponent  {
  
  termino : string = '';
  paises  : Paises[] = [];
  unError: boolean = false;

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private paisService: PaisesService ) { 
    if(localStorage.getItem('historial')){
      this.paises = JSON.parse(localStorage.getItem('historial')!);
    }
  }

  buscar() {
    this.unError = false;
    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
        console.log(paises)
        this.paises = paises;
        
      }, (err) => {
        this.unError = true;
        this.paises  = [];
      });
      localStorage.setItem('paises', JSON.stringify(this.paises));
  }

  buscador(){
    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length === 0 ) {
      return;
    }
    this.paisService.buscarPais( valor );

    this.txtBuscar.nativeElement.value = '';
  }

}

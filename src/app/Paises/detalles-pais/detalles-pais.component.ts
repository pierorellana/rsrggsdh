import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Paises } from '../Interface/pais.interface';



@Component({
  selector: 'app-detalles-pais',
  templateUrl: './detalles-pais.component.html',
  styleUrls: ['./detalles-pais.component.css']
})
export class DetallesPaisComponent implements OnInit {

  pais!: Paises;

  constructor( private activarRoute: ActivatedRoute, private paisService: PaisesService) { }

  ngOnInit(): void {

    this.activarRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
  
    }   
}



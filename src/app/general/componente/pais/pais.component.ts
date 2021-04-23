import { Component, OnInit } from '@angular/core';
import { ServicioPaisService } from 'src/app/servicios/servicio-pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais;
  paises$ : any;

  constructor( miHttp : ServicioPaisService) { 
    
  }

  ngOnInit(): void {
  }

}

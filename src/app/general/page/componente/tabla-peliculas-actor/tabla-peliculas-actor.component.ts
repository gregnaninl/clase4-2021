import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-tabla-peliculas-actor',
  templateUrl: './tabla-peliculas-actor.component.html',
  styleUrls: ['./tabla-peliculas-actor.component.css']
})
export class TablaPeliculasActorComponent implements OnInit {

  @Input() peliculas : Peliculas[];

  

  constructor( private peliculaSvc : PeliculasService) { }

  ngOnInit(): void {
  }

  


}

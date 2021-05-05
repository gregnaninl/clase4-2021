import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

import { Movies } from 'src/app/clases/movies';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  peliculaNueva : Movies;
  @Output() eventoCrearNuevaPelicula: EventEmitter<any>= new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {
  }


  GuardarNuevaPelicula(){
    this.eventoCrearNuevaPelicula.emit(this.peliculaNueva);
    this.peliculaNueva= null;

  }

  HacerNuevaPelicula(){
    this.peliculaNueva = new Movies();
  }

}

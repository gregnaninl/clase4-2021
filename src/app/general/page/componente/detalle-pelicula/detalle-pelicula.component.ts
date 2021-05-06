import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/clases/movies';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaParaMostrar : Movies;

  constructor() { 
  }

  ngOnInit(): void {
  }

}

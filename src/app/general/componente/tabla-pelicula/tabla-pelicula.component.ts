import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Movies } from '../../../../app/clases/movies';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas: Movies[];
  @Output() eventoPeliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  seleccioneUnaPelicula(pelicula:Movies){
    console.info("pelicula",Movies);
    this.eventoPeliculaSeleccionada.emit(pelicula);
  }

  ngOnInit(): void {
  }

}

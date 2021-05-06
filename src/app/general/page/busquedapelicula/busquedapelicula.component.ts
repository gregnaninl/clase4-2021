import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Movies } from '../../../../app/clases/movies';
 

@Component({
  selector: 'app-busquedapelicula',
  templateUrl: './busquedapelicula.component.html',
  styleUrls: ['./busquedapelicula.component.css']
})
export class BusquedapeliculaComponent implements OnInit {
  
  //listadoDeTablaPeliculas : Movies []; 
  peliculaSeleccionada: Movies;
  listadoDeTablaPeliculas : Peliculas [];
  listadoActores : Actor[];

  constructor( private pelicuaSvc : PeliculasService) { 

   /* this.listadoDeTablaPeliculas= [
      {id: 1,nombre: "REC",tipo : "Terror" ,fehcaEstreno: '12-12-2-2212',cantidadDePublico: 500,fotoPelicula : "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/07/rec.jpg?itok=8XD7x8--"},
      {id: 2,nombre: "MONJA",tipo : "Terror" ,fehcaEstreno: '12-12-2-2122',cantidadDePublico: 500,fotoPelicula : "https://www.radioactiva.cl/wp-content/uploads/2018/09/monja-768x403.jpg"},
      {id: 3,nombre: "ROCKY",tipo : "Accion" ,fehcaEstreno: '12-12-2-2122',cantidadDePublico: 500,fotoPelicula : "https://imagenes.milenio.com/w2BuyexrHzmjSskVjdm7H7jYgD8=/958x596/https://www.milenio.com/uploads/media/2019/07/25/sylvester-stallone-revelo-cero-derechos_0_0_915_569.jpg"}

    ]*/
  }

  ngOnInit(): void {
    this.trarPeliculas();
  }

  cargarPaisSleccionado(){


  }

  CargarPeliculaSeleccionada(pelicula : Peliculas){
    this.peliculaSeleccionada = pelicula;
   // console.info(this.peliculaSeleccionada , Peliculas);
    this.filtrarPelicula(pelicula.nombre);

  }

  filtrarPelicula(nombre : string){
    this.listadoActores = new Array();
    console.log(nombre);
    let listado = new Array();  
    listado= this.listadoDeTablaPeliculas;
    for (let index = 0; index < listado.length; index++) {
      let peli = listado[index];
      if(peli["nombre"]=== nombre){
         this.listadoActores.push(peli.actor);
        
      }}
      console.log(this.listadoActores);
     

  }

  CargarNuevaPelicula(pelicula){
  console.log(pelicula);
    this.listadoDeTablaPeliculas.push(pelicula);
  }

  trarPeliculas(){
    this.pelicuaSvc.traerTodos().valueChanges().subscribe(
    (res)=>{
      this.listadoDeTablaPeliculas = res;
    }
    );
   // console.log(this.listadoDeTablaPeliculas);
  }


}

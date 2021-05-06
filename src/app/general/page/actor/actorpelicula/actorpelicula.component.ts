import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-actorpelicula',
  templateUrl: './actorpelicula.component.html',
  styleUrls: ['./actorpelicula.component.css']
})
export class ActorpeliculaComponent implements OnInit {

  public ActorElegido :Actor;
  public listaActor : Actor[];
  
  public listadoPeliculas : Peliculas[];

  public paisActor : Pais;
  
  

  constructor(private peliculaSvc : PeliculasService) { 
   
  }

  ngOnInit(): void {
    
  }


  public cargarPais(pais : Pais){
    this.paisActor = pais;
  }

  

  public CargarActor(actor : Actor){
    this.listadoPeliculas = new Array();  
    this.listaActor = new Array(); 
    this.ActorElegido = actor; 
        this.listaActor.push(actor);
        this.paisActor= actor.pais;
        this.peliculaSvc.traerTodos().valueChanges().subscribe(
          (res)=>{            
          
            for (let index = 0; index < res.length; index++) {
              let peli = res[index];
              let pelicula = new Peliculas();
              if(peli["actor"].apellido === this.ActorElegido.apellido){
             /*   pelicula.actor = peli["actor"];
              peli.nombre = peli["nombre"];
              pelicula.tipo = peli["tipo"];
              pelicula.fehcaEstreno = peli["fehcaEstreno"];
              pelicula.id = peli["id"];
              pelicula.fotoPelicula = peli["fotoPelicula"];
              pelicula.cantidadDePublico = peli["cantidadDePublico"];*/

              this.listadoPeliculas.push(peli);
              }
              
    
          }
              },
          (error)=> console.log(error)    
        );
              console.log(this.listadoPeliculas);
     }

 


}

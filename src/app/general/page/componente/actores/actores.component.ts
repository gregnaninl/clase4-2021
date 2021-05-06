import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {

  public lista : Actor;
  public listadoActores :  object;
  public actorSeleccionado : Actor;

  @Output() eventoActorSeleccionado: EventEmitter<Actor>= new EventEmitter<Actor>();


 
  constructor( private db : AngularFirestore) { }

  ngOnInit(): void {
  this.cargarActores();    

  }

   private verTodo(actor: Actor){
    //console.info("pelicula",Movies);
    this.eventoActorSeleccionado.emit(actor);
  }

  private verPeliculas(actor: Actor){

  }

  private verPais(actor: Actor){

  }

  private verDetalle(actor: Actor){

  }

  public cargarActores(){

    this.db.collection('actores').valueChanges().subscribe(
      (res)=>{
        this.listadoActores = res;
          },
      (error)=> console.log(error)     
      );
  }

 



}

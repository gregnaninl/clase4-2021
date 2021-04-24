import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  
  public lista : Actor;
  public listadoActores :  object;

  constructor( private db : AngularFirestore) { }

  ngOnInit(): void {
  this.cargarActores();    

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

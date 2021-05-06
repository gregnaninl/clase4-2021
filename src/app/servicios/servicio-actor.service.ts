import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicioActorService {

 
  private actorCollection!: AngularFirestoreCollection<Actor>;

  constructor( private afs: AngularFirestore) {
    this.actorCollection= afs.collection<Actor>('actores');
   }



 
   async GuardarActor(nuevoActor: Actor ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...nuevoActor};
        const result = this.actorCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        console.log(error);        
        reject(error.message);
      }
    });
  }
 


  public traerTodos(): AngularFirestoreCollection<Actor> {
    return this.actorCollection;
}




  

}

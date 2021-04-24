import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioActorService {

  actor! : Actor;
  private actorCollection!: AngularFirestoreCollection<Actor>;

  constructor( private afs: AngularFirestore) {
    this.actorCollection= afs.collection<Actor>('actores');
   }



  async GuardarActor(formularioAlta: Actor): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...formularioAlta};
        const result = this.actorCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }


  

}

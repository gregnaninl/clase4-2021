import { Injectable } from '@angular/core';
import { Peliculas } from './../clases/peliculas';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  
  actor! : Peliculas;
  private peliculasCollection!: AngularFirestoreCollection<Peliculas>;

  constructor( private afs: AngularFirestore) {
    this.peliculasCollection= afs.collection<Peliculas>('peliculas');
   }



  async GuardarPelicula(peliculaNueva: Peliculas ): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.afs.createId();
        const data = { id, ...peliculaNueva};
        const result = this.peliculasCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  public traerTodos(): AngularFirestoreCollection<Peliculas> {
    return this.peliculasCollection;
}




}

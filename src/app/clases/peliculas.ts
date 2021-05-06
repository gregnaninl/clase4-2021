import { Actor } from './actor';

export class Peliculas
 {       
    id: number;
    nombre: string;
    tipo : string ;
    fehcaEstreno: string;
    cantidadDePublico: number;
    fotoPelicula : string ;
    actor: Actor = new Actor;
 }
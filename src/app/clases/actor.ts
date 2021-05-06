import { Pais } from "./pais";

export class Actor {

    id: number;
    nombre: string;
    apellido : string ;
    direccion!: string;
    email: string;
    pais : Pais = new Pais;
    //pais: string;
}

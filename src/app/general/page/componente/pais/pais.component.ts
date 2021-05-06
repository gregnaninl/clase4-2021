import { Component, OnInit , Output ,EventEmitter} from '@angular/core';
import { ServicioPaisService } from 'src/app/servicios/servicio-pais.service';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  lista : any;
  listaPaises :object;
  paisElegido : Pais;
  paisList : Pais[];

 
  @Output() eventoCargarPais: EventEmitter<Pais>= new EventEmitter<Pais>();

  constructor(private miHttp : ServicioPaisService) { 
  this.paisElegido= new Pais;
  this.paisList= new Array ();
  }

  ngOnInit(): void {
  this.traerTodos();
  }

  public traerTodos(){
    this.miHttp.getTodosLosPaises().subscribe(
    (res: any)=>{
   //   this.listaPaises= res;
  // let auxList = new Array();
   for (let index = 0; index < res.length; index++) {
       let currentChat = res[index];
       let chat = new Pais();
       chat.nombre = currentChat["name"];
       chat.bandera = currentChat["flag"];
       chat.region = currentChat["region"];
      this.paisList.push(chat);

   }
      },
    (error)=> console.log(error) 
    ); 

   
    }

    GuardarPais(pais : Pais){
     // this.pais= nombre;
   ///   this.paisElegido.nombre  =  String(pais['name']);
      //this.paisElegido.bandera = String(pais['flag']);
      //this.paisElegido.region = String(pais['region']);
      this.paisElegido=pais;
            this.eventoCargarPais.emit(this.paisElegido); 
            console.info(this.paisElegido); 
    }



}

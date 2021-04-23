import { Component, OnInit } from '@angular/core';
import { ServicioPaisService } from 'src/app/servicios/servicio-pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  lista : any;
  listaPaises :object;

  


  constructor(private miHttp : ServicioPaisService) { 

  }

  ngOnInit(): void {
  this.traerTodos();
  }

  public traerTodos(){
    this.miHttp.getTodosLosPaises().subscribe(
    (res)=>{
      this.listaPaises= res;
        },
    (error)=> console.log(error) 
    ); 
    }



}

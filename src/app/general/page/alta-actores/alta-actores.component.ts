import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ServicioActorService } from 'src/app/servicios/servicio-actor.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  public formularioAlta : FormGroup;
   
  public listadoActores :  Actor [];
  public actorSeleccionado : Actor ;
  

  constructor(  private fb: FormBuilder, private actorSvc : ServicioActorService) { 
    this.actorSeleccionado  = new Actor;
  }

  ngOnInit(): void {
  
    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'apellido': ['',Validators.required],
      'email': ['',[Validators.required,Validators.email]],
      'direccion':[''],
      'pais': ['',Validators.required]
    });

   

  }

 
  
  public cargarPaisSleccionado(pais :Pais){
    this.formularioAlta.get('pais').setValue(pais.nombre);
    this.actorSeleccionado.pais = pais;
  }

  
   GuardarActor(){

    if(this.formularioAlta.valid){  
      this.cargarActor();
      try{
     // this.actorSvc.GuardarActor(this.actorSeleccionado);
      //this.formularioAlta.reset();
      console.info(this.actorSeleccionado);
      //ok
     // Swal.fire('pelicula Enviada','Todo subio correctamente!!','success'); 
      }
      catch(e){
        console.log(e);
        Swal.fire('Algo Salio Mal!',e,'error');  
      }
    }
  }

  private cargarActor(){
    this.actorSeleccionado.nombre = this.formularioAlta.get('nombre').value;
    this.actorSeleccionado.apellido = this.formularioAlta.get('apellido').value;
    this.actorSeleccionado.email = this.formularioAlta.get('email').value;
    this.actorSeleccionado.direccion = this.formularioAlta.get('direccion').value;

  }
    
  

}


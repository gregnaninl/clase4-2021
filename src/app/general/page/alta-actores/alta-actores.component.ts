import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
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
  

  constructor(  private fb: FormBuilder, private servActor : ServicioActorService) { }

  ngOnInit(): void {
  
    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'apellido': ['',Validators.required],
      'email': ['',[Validators.required,Validators.email]],
      'direccion':[''],
      'pais': ['',Validators.required]
    });

   

  }

  public cargar(){
    console.log(this.formularioAlta.get('nombre'));
  }
  
  public cargarPaisSleccionado(nombre :string){
    this.formularioAlta.get('pais').setValue(nombre);
  }

  
  async GuardarActor(){

  if(this.formularioAlta.valid){
    try {
      const formValue = this.formularioAlta.value;
      
         await  this.servActor.GuardarActor(formValue );
          //ok
         Swal.fire('Mensaje Enviado', 'Todo subio correctamente!!','success');
         this.formularioAlta.reset();
        
        } catch (error) {
      console.log(error);
      Swal.fire('Algo Salio Mal!','Revisa el contenido del formulario','error');

        }
  }
  }

    
  

}


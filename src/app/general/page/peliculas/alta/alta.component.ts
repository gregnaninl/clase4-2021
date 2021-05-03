import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { ServicioActorService } from 'src/app/servicios/servicio-actor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public formularioAlta : FormGroup;
  
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'apellido': ['',Validators.required],
      'email': ['',[Validators.required,Validators.email]],
      'direccion':[''],
      'pais': ['',Validators.required]
    });
  }



  public cargarPaisSleccionado(nombre :string){
    this.formularioAlta.get('pais').setValue(nombre);
  }
}

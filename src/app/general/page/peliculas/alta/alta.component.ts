import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { ServicioActorService } from 'src/app/servicios/servicio-actor.service';
<<<<<<< HEAD
import Swal from 'sweetalert2'
=======
import Swal from 'sweetalert2';

>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b

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
<<<<<<< HEAD
      'actor': ['',Validators.required]
=======
      'pais': ['',Validators.required]
>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b
    });
  }



<<<<<<< HEAD
  public cargarPaisSleccionado(nombre :Actor){
    this.formularioAlta.get('actor').setValue(nombre.nombre+", "+nombre.apellido);
  }

=======
  public cargarPaisSleccionado(nombre :string){
    this.formularioAlta.get('pais').setValue(nombre);
  }
>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b
}

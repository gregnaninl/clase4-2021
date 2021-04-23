import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  public formularioAlta : FormGroup;


  constructor(  private fb: FormBuilder) { }

  ngOnInit(): void {
  
    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'apellido': ['',Validators.required],
      'email': ['',[Validators.required,Validators.email]],
      'direccion':[''],
      'pais': ['',Validators.required],
    })


  }

  public cargar(){
    console.log(this.formularioAlta.get('firstName'));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { ServicioActorService } from 'src/app/servicios/servicio-actor.service';
import Swal from 'sweetalert2'
import { Peliculas } from 'src/app/clases/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  public formularioAlta : FormGroup;
  public peliculaNueva : Peliculas;
  public actornuevo : Actor;
 
  
  constructor( private fb: FormBuilder, private peliculaSvc : PeliculasService) {
    this.peliculaNueva = new Peliculas;
   }

  ngOnInit(): void {
    this.formularioAlta = this.fb.group({
      'nombre': ['',Validators.required],
      'tipo': ['',Validators.required],
      'fecha': ['',Validators.required],
      'publico':[''],
      'foto':[''],
      'actor': ['',Validators.required]
   });
  }



  public cargarPaisSleccionado(actor :Actor){
    this.formularioAlta.get('actor').setValue(actor.nombre+", "+actor.apellido);
    
    this.peliculaNueva.actor= actor;
   
  }

  GuardarPelicula(){

    if(this.formularioAlta.valid){  
      this.cargarPelicula();
      try{
      this.peliculaSvc.GuardarPelicula(this.peliculaNueva);
      this.formularioAlta.reset();
      //ok
      Swal.fire('pelicula Enviada','Todo subio correctamente!!','success'); 
      }
      catch(e){
        console.log(e);
        Swal.fire('Algo Salio Mal!',e,'error');  
      }
    }
    
  }

  cargarPelicula(){
  this.peliculaNueva.nombre= this.formularioAlta.get('nombre').value;
  this.peliculaNueva.tipo = this.formularioAlta.get('tipo').value;
  this.peliculaNueva.fehcaEstreno = this.formularioAlta.get('fecha').value;
  this.peliculaNueva.cantidadDePublico= this.formularioAlta.get('publico').value;
  this.peliculaNueva.fotoPelicula = this.formularioAlta.get('foto').value;
  
  }


}

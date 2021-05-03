import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { TablaActorComponent } from '../general/componente/tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [
    PeliculasComponent,
    
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    TablaActorComponent

  ]
})
export class PeliculasModule { }

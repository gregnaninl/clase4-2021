import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
<<<<<<< HEAD
import { TablaActorComponent } from '../general/page/componente/tabla-actor/tabla-actor.component';
=======
import { TablaActorComponent } from '../general/componente/tabla-actor/tabla-actor.component';
>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b


@NgModule({
  declarations: [
<<<<<<< HEAD
    PeliculasComponent
=======
    PeliculasComponent,
    
>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
<<<<<<< HEAD
  
=======
    TablaActorComponent

>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b
  ]
})
export class PeliculasModule { }

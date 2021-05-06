import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorpeliculaComponent } from '../general/page/actor/actorpelicula/actorpelicula.component';
import { ActoresComponent } from './actores.component';

const routes: Routes = [
  { path: 'actorpelicula', component: ActorpeliculaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from '../general/page/peliculas/alta/alta.component';
import { PeliculasComponent } from './peliculas.component';

const routes: Routes = [
  { path: 'alta', component: AltaComponent },
  { path: '', component: AltaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }

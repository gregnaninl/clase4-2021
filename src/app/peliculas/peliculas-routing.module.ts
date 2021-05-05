import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from '../general/page/peliculas/alta/alta.component';
import { PeliculasComponent } from './peliculas.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: 'alta', component: AltaComponent }];
=======
  { path: 'alta', component: AltaComponent },
  { path: '', component: AltaComponent }
];
>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }

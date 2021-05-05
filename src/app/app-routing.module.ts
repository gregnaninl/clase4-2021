import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './general/page/alta-actores/alta-actores.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { BusquedapeliculaComponent } from './general/page/busquedapelicula/busquedapelicula.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'buscar', component:BusquedapeliculaComponent},
  {path: 'bienvenidos', component:BienvenidosComponent},
  {path: 'actores', component:AltaActoresComponent},
<<<<<<< HEAD
  {path: '', redirectTo:'buscar',pathMatch: 'full'},
=======
  {path: '', redirectTo:'peliculas',pathMatch: 'full'},
>>>>>>> 1ae1c20c144a0057f4ce94853cc818bc0d47639b
  { path: 'peliculas', loadChildren: () => import('./peliculas/peliculas.module').then(m => m.PeliculasModule) },  
  {path: '**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './general/page/alta-actores/alta-actores.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { BusquedapeliculaComponent } from './general/page/busquedapelicula/busquedapelicula.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'peliculas', component:BusquedapeliculaComponent},
  {path: 'bienvenidos', component:BienvenidosComponent},
  {path: 'actores', component:AltaActoresComponent},
  {path: '', redirectTo:'peliculas',pathMatch: 'full'},
  { path: 'peliculas', loadChildren: () => import('./peliculas/peliculas.module').then(m => m.PeliculasModule) },  
  {path: '**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

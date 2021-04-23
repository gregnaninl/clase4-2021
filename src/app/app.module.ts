import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { BusquedapeliculaComponent } from './general/page/busquedapelicula/busquedapelicula.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { MenuComponent } from './general/page/menu/menu.component';
import { TablaPeliculaComponent } from './general/componente/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './general/componente/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './general/componente/alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';
import { AltaActoresComponent } from './general/page/alta-actores/alta-actores.component';
import { ServicioPaisService } from './servicios/servicio-pais.service';
import { PaisComponent } from './general/componente/pais/pais.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    BusquedapeliculaComponent,
    PageNotFoundComponent,
    MenuComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    AltaActoresComponent,
    PaisComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioPaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }

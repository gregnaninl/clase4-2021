import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { BusquedapeliculaComponent } from './general/page/busquedapelicula/busquedapelicula.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { MenuComponent } from './general/page/menu/menu.component';
import { TablaPeliculaComponent } from './general/page/componente/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './general/page/componente/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './general/page/componente/alta-pelicula/alta-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaActoresComponent } from './general/page/alta-actores/alta-actores.component';
import { ServicioPaisService } from './servicios/servicio-pais.service';
import { ServicioActorService } from './servicios/servicio-actor.service';
import { PaisComponent } from './general/page/componente/pais/pais.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TablaActorComponent } from './general/page/componente/tabla-actor/tabla-actor.component';
import { AltaComponent } from './general/page/peliculas/alta/alta.component';
import { PeliculaAltaComponent } from './general/page/componente/pelicula-alta/pelicula-alta.component';
import { ActorpeliculaComponent } from './general/page/actor/actorpelicula/actorpelicula.component';
import { ActoresComponent } from './general/page/componente/actores/actores.component';
import { TablaPeliculasActorComponent } from './general/page/componente/tabla-peliculas-actor/tabla-peliculas-actor.component';
import { TablaPaisActorComponent } from './general/page/componente/tabla-pais-actor/tabla-pais-actor.component';
import { TablaDetalleActorComponent } from './general/page/componente/tabla-detalle-actor/tabla-detalle-actor.component';
import { DetallePaisComponent } from './general/page/componente/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './general/page/componente/detalle-actor/detalle-actor.component';






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
    PaisComponent,
    TablaActorComponent,
    AltaComponent,
    PeliculaAltaComponent,
    ActorpeliculaComponent,
    ActoresComponent,
    TablaPeliculasActorComponent,
    TablaPaisActorComponent,
    TablaDetalleActorComponent,
    DetallePaisComponent,
    DetalleActorComponent 
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [ServicioPaisService, AngularFirestore, ServicioActorService],
  bootstrap: [AppComponent],
  exports:[TablaActorComponent]
})
export class AppModule { 
 
}

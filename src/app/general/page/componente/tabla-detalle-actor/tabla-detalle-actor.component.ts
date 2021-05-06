import { Component, OnInit , Input} from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-tabla-detalle-actor',
  templateUrl: './tabla-detalle-actor.component.html',
  styleUrls: ['./tabla-detalle-actor.component.css']
})
export class TablaDetalleActorComponent implements OnInit {

  @Input() actorParaMostrar : Actor;

  constructor() { }

  ngOnInit(): void {
  }

}

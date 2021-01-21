import { Component } from "@angular/core";
import { WebService } from './web.service'; //importamos el webservice

@Component ({
    selector: 'tareas',
    template: `<h1>Listado tareas</h1>
        <mat-card *ngFor="let tarea of webservice.tareas" style="margin:8px">
        <mat-card-title>{{tarea.usuario}}</mat-card-title>
        <mat-card-content>
        <p>{{tarea.trabajo}}</p>
        </mat-card-content>
        </mat-card>`
})

export class TareasComponent {

    //lo pasamos a publico para que se pueda acceder desde cualquier sitio a él
    constructor(public webservice: WebService){}

}

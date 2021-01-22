import { Component } from "@angular/core";
import { WebService } from './web.service'; //importamos el webservice
import { ActivatedRoute, Params } from "@angular/router";

@Component ({
    selector: 'tareas',
    template: `<h1>Listado tareas</h1>
        <mat-card *ngFor="let tarea of webservice.tareas" style="margin:8px">
        <mat-card-title [routerLink]="['/tareas', tarea.usuario]">{{tarea.usuario}}</mat-card-title>
        <mat-card-content>
        <p>{{tarea.trabajo}}</p>
        </mat-card-content>
        </mat-card>`
})

export class TareasComponent {
    username: any; 
    
    //lo pasamos a publico para que se pueda acceder desde cualquier sitio a él
    constructor(public webservice: WebService, private rutaActiva: ActivatedRoute){}

    /* CREAMOS NUESTRO PROPIO METODO ON INIT */
    ngOnInit(): void {
        this.username = (this.rutaActiva.snapshot.params.username);
        this.webservice.getTask(this.username);
    }
}

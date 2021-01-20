import { Component } from "@angular/core";
import { WebService } from './web.service'; //importamos el webservice

@Component ({
    selector: 'tareas',
    template: `<h1>Listado tareas</h1>
        <mat-card *ngFor="let tarea of tareas" style="margin:8px">
        <mat-card-title>{{tarea.usuario}}</mat-card-title>
        <mat-card-content>
        <p>{{tarea.trabajo}}</p>
        </mat-card-content>
        </mat-card>`
})

export class TareasComponent {
    tareas: any //es del tipo any porque viene de un recurso externo

    //creamos un constructor con una variable privada
    constructor(private webservice: WebService){}

    //metodo OnInit asíncrono async y await en la respuesta//
    async ngOnInit(){
        let respuesta = await this.webservice.getTask();
        this.tareas = respuesta; 
    }
}

import { Component } from "@angular/core";
import { WebService } from './web.service'; //importamos el webservice

@Component ({
    selector: 'tareas',
    template: `<h1>Listado de tareas</h1>
        <mat-card *ngFor="let tarea of tareas" style="margin:8px">
        <mat-card-title>{{tarea.usuario}}</mat-card-title>
        <mat-card-content>
        <p>{{tarea.trabajo}}</p>
        </mat-card-content>
        </mat-card>`
})

export class TareasComponent {
    //creamos un constructor con una variable privada
    constructor(private webservice: WebService){}

    //metodo OnInit asíncrono async y await en la respuesta//
    async ngOnInit(){
        let respuesta = await this.webservice.getTask();
        console.log(respuesta);
    }

    tareas = [{trabajo: 'primera tarea', usuario: 'Miryam'},
              {trabajo: 'segunda tarea', usuario: 'Oliver'}
    ];
}

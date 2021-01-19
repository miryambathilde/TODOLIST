import {  Component } from "@angular/core"

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
    
    tareas = [{trabajo: 'primera tarea', usuario: 'Miryam'},
            {trabajo: 'segunda tarea', usuario: 'Oliver'}
    ];
}

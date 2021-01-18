import {  Component } from "@angular/core"

@Component ({
    selector: 'tareas',
    template: 'Listado tareas: <div *ngFor="let tarea of tareas">Tarea: {{tarea.trabajo}}, Usuario: {{tarea.usuario}}'
})

export class TareasComponent {
    tareas = [{trabajo: 'primera tarea', usuario: 'Miryam'},
            {trabajo: 'segunda tarea', usuario: 'Oliver'}
    ];
}


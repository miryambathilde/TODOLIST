import { Component } from "@angular/core";
import { TareasComponent } from './tareas.component';
import { NuevaTareaComponent } from './nueva-tarea.component';

@Component ({
    selector: 'home',
    template: '<nueva-tarea></nueva-tarea><tareas></tareas>'
})

export class HomeComponent {

}

/* el enturador esta llamando al home por lo cual se mostrará dentro
de ese router-outlet */
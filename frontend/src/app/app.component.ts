import { Component } from '@angular/core';
import { TareasComponent } from './tareas.component';
import { NuevaTareaComponent } from './nueva-tarea.component';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-root',
  template: '<nueva-tarea></nueva-tarea><tareas></tareas>',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'frontend';
}

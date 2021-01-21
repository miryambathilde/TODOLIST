import { Component } from '@angular/core';
import { TareasComponent } from './tareas.component';
import { NuevaTareaComponent } from './nueva-tarea.component';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-root',
  /* le decimos que capture la nuevaTarea y que es igual al metodo que acabamos de enlazar
  nTarea y le pasamos el parametro que pasa ese evento*/
  template: '<nueva-tarea></nueva-tarea><tareas></tareas>',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

}

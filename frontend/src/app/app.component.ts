import { Component, ViewChild } from '@angular/core'; //añadimos ViewChild//
import { TareasComponent } from './tareas.component';
import { NuevaTareaComponent } from './nueva-tarea.component';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-root',
  /* le decimos que capture la nuevaTarea y que es igual al metodo que acabamos de enlazar
  nTarea y le pasamos el parametro que pasa ese evento*/
  template: '<nueva-tarea (nuevaTarea)="nTarea($event)"></nueva-tarea><tareas></tareas>',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  //aqui llamamos a ViewChild para ver el Componente TareasComponent, lo llamamos tareas y pasamos el tipo TareasComponent//
  @ViewChild(TareasComponent) tareas : TareasComponent

  //metodo ntarea que es nueva tarea//
  /* hacemos un PUSH nueva tarea, la primera tareas es llamar al componente,
  y la segunda tareas es llamar al array qu esta dentro del componente y le hacemos
  el PUSH de lo que nos llega por parametro de taream que es la tarea en cuestion  */
  nTarea(tarea){
    this.tareas.tareas.push(tarea);
  }
}

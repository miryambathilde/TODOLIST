import { Component, Output, EventEmitter } from "@angular/core"; //añadimos Output, EventEmitter//
import { WebService } from './web.service'; //importamos el webservice

@Component ({
    selector: 'nueva-tarea',
    template: `
        <mat-card>
        <mat-card-title>Añadir nueva tarea</mat-card-title>
            <mat-form-field class="example-full-width">
            <mat-label>Nombre de usuario</mat-label>
            <input [(ngModel)] = "tarea.usuario"  matInput placeholder="username" value="">
            </mat-form-field>
            <mat-form-field class="example-full-width">
            <mat-label>Añade tu nueva tarea:</mat-label>
            <textarea [(ngModel)] = "tarea.trabajo" matInput placeholder="Introduce tu tarea"></textarea>
            </mat-form-field>
            <section>
            <div class="example-button-row">
                <button (click)= "post()" mat-raised-button color="Añadir">Añadir</button>
            </div>
            </section>
        </mat-card>`
})

export class NuevaTareaComponent {
    //queremos hacer una salida llamada nuevaTarea, que es igual a la emisión de un nuevo evento//
    @Output() nuevaTarea = new EventEmitter();
    
    //creamos un constructor con una variable privada
    constructor(private webservice: WebService){}

    tarea= {trabajo: '', usuario: ''}
    post(){
        this.webservice.postTask(this.tarea);
        this.nuevaTarea.emit(this.tarea); //la nueva tarea emitirá y le pasamos por parametro tarea, que es la nueva tarea que se añade
    }
}

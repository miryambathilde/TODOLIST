import { Component } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'
import { WebService } from './web.service'; //importamos el webservice

@Component ({
    selector: 'nueva-tarea',
    template: `
        <mat-card>
        <mat-card-title>Añadir nueva tarea</mat-card-title>
        <form class="example-form">
            <mat-form-field class="example-full-width">
                <mat-label>Nombre de usuario</mat-label>
                <input matInput placeholder="username" value="">
            </mat-form-field>
            <mat-form-field class="example-full-width">
                <mat-label>Añade tu nueva tarea:</mat-label>
                <textarea matInput placeholder="Introduce tu tarea"></textarea>
            </mat-form-field>
            </form>
            <section>
            <div class="example-button-row">
                <button mat-raised-button color="Añadir">Añadir</button>
                <a mat-raised-button href="https://www.google.com/" target="_blank"></a>
            </div>
            </section>
        </mat-card>`
})

export class NuevaTareaComponent {

    //creamos un constructor con una variable privada
    constructor(private webservice: WebService){}
}

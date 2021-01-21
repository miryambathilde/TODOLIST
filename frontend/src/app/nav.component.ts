import { Component } from "@angular/core";


@Component ({
    selector: 'nav',
    template: `<mat-toolbar color="primary">Lista de tareas
        <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
        <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/"> <!-- añadimos el enrutador -->
            <mat-icon>home</mat-icon>
            <span>Inicio</span>
        </button>
        <button mat-menu-item routerLink="/tareas"> <!-- añadimos el enrutador -->
            <mat-icon>assignment_turned_in</mat-icon>
            <span>Tareas</span>
        </button>
        </mat-menu>
        </mat-toolbar>`
})

export class NavComponent {

    constructor(){}

}

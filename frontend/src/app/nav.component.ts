import { Component } from '@angular/core';
import { AuthService } from './auth.service'; //importamos el servicio AuthService

@Component({
  selector: 'nav',
  template: `<mat-toolbar color="primary">Lista de tareas
    <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu"> <!-- boton de inicio -->
  <button mat-menu-item routerLink="/">
    <mat-icon>home</mat-icon>
    <span>Inicio</span>
  </button>
  <button mat-menu-item routerLink="/tareas"> <!-- boton de tareas -->
    <mat-icon>assignment_turned_in</mat-icon>
    <span>Tareas</span>
  </button>
  <button mat-menu-item routerLink="/login"> <!-- boton de login -->
    <mat-icon>assignment_ind</mat-icon>
    <span>Identifícate</span>
  </button>
  <button mat-menu-item routerLink="/register"> <!-- boton para registrarse -->
    <mat-icon>assignment_ind</mat-icon>
    <span>Registro de nuevo usuario</span>
  </button>
  <button mat-menu-item routerLink="/" (click)="logout()"> <!-- boton de cerrar sesión -->
    <mat-icon>highlight_off</mat-icon>
    <span>Cerrar sesión</span>
  </button>
</mat-menu>
<span style="flex: 1 1 auto"></span> <!-- esto fuerza que el span de bienvenido este siempre en la derecha -->
<span *ngIf="ident" >Bienvenido {{name}}</span> <!-- saludo al usuario, SI ESTÁ identificado -->
  </mat-toolbar>
    `
})
export class NavComponent {

  name: string; //creamos la propiedad name del tipo string
  ident: boolean; //creamos la propiedad ident del tipo string
  constructor(private auth: AuthService){ //private y asociamos auth a AuthService
    this.name = auth.name; //asociamos name al nombre de usuario que conseguimos con el get name de authservice
    this.ident = auth.identificado; //asociamos ident al usuario identificado que conseguimos con el get identificado de authservice
  }
  
  logout(){
    localStorage.clear();
  }

}

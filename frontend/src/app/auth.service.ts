import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; //esto es para mostrar errores en caso de que se produzca cualquier incidencia con el registro del usuario
import { Router } from '@angular/router';


@Injectable()

export class AuthService { //cambiamos el nombre de la clase para evitar futuros problemas 

  APIURL = 'http://localhost:7070/auth'; //la api ahora apunta a /auth, para tener nuestro propio enrutador para las tareas de registro, identificación y demás
  userinfo: any;


  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) {}

  get name(): string {
    return localStorage.getItem('nombre');
  }

  get identificado(): boolean {
    return !!localStorage.getItem('token');
  }


  register(user) {
        delete user.cpassword; //delete para eliminar una propiedad del objeto
        this.http.post(this.APIURL + '/register', user).subscribe(res => {
          this.userinfo = res;
          localStorage.setItem('token', res.toString());//localStorage + set item(almacenar un elemento),'token' es el clave valor, y la respuesta que esperamos es un string
         }, error => {
        this.manejadorErrores('No se ha realizar el registro del usuario');
    });

  }


  private manejadorErrores(error) {
    this._snackBar.open(error, 'Cerrar', {
      duration: 2000,
    });
  }
}

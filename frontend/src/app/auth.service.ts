import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; //esto es para mostrar errores en caso de que se produzca cualquier incidencia con el registro del usuario
import { Router } from '@angular/router'; //importamos el router


@Injectable()

export class AuthService { //cambiamos el nombre de la clase para evitar futuros problemas 

  APIURL = 'http://localhost:7070/auth'; //la api ahora apunta a /auth, para tener nuestro propio enrutador para las tareas de registro, identificación y demás
  userinfo: any; //creamos el objeto userinfo
  error: any;


  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) {} //añadimos como private el router

  /* GETTERS */
  get name(): string {
    return localStorage.getItem('nombre');//Hacemos un return con localStorage del dispositivo del usuario para seguridad
  }

  get identificado(): boolean {
    return !!localStorage.getItem('token');//Para que se muestre solo el mensaje de bienvenido cuando esta identificado
  }

  /* metodo LOGIN con el userdata vamos a verificar que el usuario existe en nuestra base de datos y que el password coincide*/
  login(logindata){
    this.http.post(this.APIURL + '/login', logindata).subscribe(res => {
      console.log(res);
    });
  }

  logout () {
    localStorage.clear();
  }

  register(user) {
        delete user.cpassword; //delete para eliminar una propiedad del objeto
        this.http.post(this.APIURL + '/register', user).subscribe(res => {
          this.userinfo = res;
          localStorage.setItem('token', this.userinfo.token);//localStorage + set item + userinfo (que es respuesta)y token
          localStorage.setItem('nombre', this.userinfo.nombre);//localStorage + set item + userinfo (que es respuesta)y nombre
          this.router.navigate(['/']); //añadimos el router con la url de la raiz para redireccionar directamente
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

import { HttpClient, HttpHeaders } from '@angular/common/http'; //añadimos los HttpHeaders
import { Injectable } from '@angular/core'; //al ser un servicio es un injectable
import { MatSnackBar } from '@angular/material/snack-bar'; //SNACK-BAR
import { Subject } from "rxjs";//para usar el subject es imprescindible que tengamos la librería rxjs
import { map } from 'rxjs/operators';


@Injectable()

export class WebService {

    /* VARIABLE DE LA PARTE DE LA RUTA QUE ES IGUAL PARA TODOS */
    APIURL = 'http://localhost:7070/api'

    /* CREACION DE PROPIEDADES */
    tareas: any;
    respuesta: any;
    tareasSujeto = new Subject(); //declaramos la instancia de subject
    private: any;
    

    constructor (private http: HttpClient, private _snackBar: MatSnackBar){ //concatenamos el snackbar
        this.tareas = []; //tareas lo inicializamos vacio
        this.getTask(''); //añadimos el getTask para que cargue el listado de tareas al ser asíncrono
    }

    /*METODOS*/
    getTask(username) {
            /* si hay username, dale el valor username, si no simplemente utilizas username y lo dejas vacío */
            username = (username) ? '/' + username : '';
            this.http.get(this.APIURL + '/tareas' + username).subscribe(res => {
                this.tareas = res;
                this.tareasSujeto.next(this.tareas); 
            }, error => {
            this.manejadorErrores('No se han podido obtener las tareas solicitadas'); //PASAMOS EL METODO DE MANEJADOR DE ERRORES con el mensaje que queremos mostrar
        });
    }
    
    //MODULO TRY CATCH
    async postTask(_tarea) {
        try {
            this.respuesta = await this.http.post(this.APIURL + '/tarea', _tarea).toPromise(); // pasamos el APIURL, concatenamos con tarea y le pasamos como argumento tarea desde la vista
            this.tareas.push(this.respuesta); //cuando lo asignamos a tareas le hacemos un push y en ese push es donde pasamos la respuesta
            this.tareasSujeto.next(this.tareas);
        } catch (error) {
          this.manejadorErrores('No se ha podido publicar la tarea');
        }  
    }

    /* metodo getuser CON HttpHeaders para conseguir el token alamacenado  */
    getUser() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        this.http.get(this.APIURL + '/users/yop', {headers}).pipe(map(res => res)).subscribe();

    /* METODO PRIVADO DE MANEJADOR DE ERRORES */
    private manejadorErrores(error) {
        this._snackBar.open(error, 'Cerrar', {
          duration: 2000,
        });
    }
}

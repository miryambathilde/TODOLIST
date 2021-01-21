//creamos un servicio//

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //al ser un servicio es un injectable
import { MatSnackBar } from '@angular/material/snack-bar'; //SNACK-BAR

@Injectable()

export class WebService {

    /* VARIABLE DE LA PARTE DE LA RUTA QUE ES IGUAL PARA TODOS */
    APIURL = 'http://localhost:7070/api'

    /* CREACION DE PROPIEDADES */
    tareas: any; //any porque viene de terceros, de fuente externa
    respuesta: any;

    constructor (private http: HttpClient, private _snackBar: MatSnackBar){ //concatenamos el snackbar
        this.tareas = []; //tareas lo inicializamos vacio
        this.getTask(); //añadimos el getTask para que cargue el listado de tareas al ser asíncrono
    }

    /*METODOS*/
    /* SINGLETON, al estar en webservice estará disponible para todos los componentes sin necesidad de id capturando todos los eventos desde un hijo */
    async getTask() {
        //MODULO TRY CATCH
        try {
            this.respuesta = await this.http.get(this.APIURL + '/tareas').toPromise(); //hacemos respuesta asicrono
            this.tareas = this.respuesta; //y una vez que obtengo la respuesta le paso los valores a tareas
        } catch (error) {
            this.manejadorErrores('No se han podido obtener las tareas solicitadas'); //PASAMOS EL METODO DE MANEJADOR DE ERRORES con el mensaje que queremos mostrar
        }
    }
    
    //MODULO TRY CATCH
    async postTask(_tarea) {
        try {
            this.respuesta = await this.http.post(this.APIURL + '/tarea', _tarea).toPromise(); // pasamos el APIURL, concatenamos con tarea y le pasamos como argumento tarea desde la vista
            this.tareas.push(this.respuesta); //cuando lo asignamos a tareas le hacemos un push y en ese push es donde pasamos la respuesta
        } catch (error) {
            this.manejadorErrores('No se ha podido publicar la tarea');
        }  
    }

    /* METODO PRIVADO DE MANEJADOR DE ERRORES */
    private manejadorErrores(error) {
        this._snackBar.open(error, 'Cerrar', {
            duration: 4000,
        });
    }
}

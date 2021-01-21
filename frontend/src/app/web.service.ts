//creamos un servicio//

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //al ser un servicio es un injectable

@Injectable()

export class WebService {

    /* VARIABLE DE LA PARTE DE LA RUTA QUE ES IGUAL PARA TODOS */
    APIURL = 'http://localhost:7070/api'

    /* CREACION DE PROPIEDADES */
    tareas: any; //any porque viene de terceros, de fuente externa
    respuesta: any;

    constructor (private http: HttpClient){
        this.tareas = []; //tareas lo inicializamos vacio
        this.getTask(); //añadimos el getTask para que cargue el listado de tareas al ser asíncrono
    }

    /*METODOS*/
    /* SINGLETON, al estar en webservice estará disponible para todos los componentes sin necesidad de id capturando todos los eventos desde un hijo */
    async getTask() {
        this.respuesta = await this.http.get(this.APIURL + '/tareas').toPromise(); //hacemos respuesta asicrono
        this.tareas = this.respuesta; //y una vez que obtengo la respuesta le paso los valores a tareas
    }
    
    /*METODO QUE VA A RECIBIR LA TAREA Y LO VA A PASAR AL API REST QUE LO ALMACENARA
    EN MEMORIA*/
    async postTask(_tarea) {
        this.respuesta = await this.http.post(this.APIURL + '/tarea', _tarea).toPromise(); // pasamos el APIURL, concatenamos con tarea y le pasamos como argumento tarea desde la vista
        this.tareas.push(this.respuesta); //cuando lo asignamos a tareas le hacemos un push y en ese push es donde pasamos la respuesta
    }
}

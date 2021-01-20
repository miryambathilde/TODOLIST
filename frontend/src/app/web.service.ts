//creamos un servicio//

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //al ser un servicio es un injectable

@Injectable()

export class WebService {

    /* VARIABLE DE LA PARTE DE LA RUTA QUE ES IGUAL PARA TODOS */
    APIURL = 'http://localhost:7070/api'

    constructor (private http: HttpClient){}

    /*METODOS*/
    getTask(){
        return this.http.get(this.APIURL + '/tareas').toPromise();
    }
    
    /*METODO QUE VA A RECIBIR LA TAREA Y LO VA A PASAR AL API REST QUE LO ALMACENARA
    EN MEMORIA*/
    postTask(_tarea){
        return this.http.post(this.APIURL + '/tarea', _tarea).toPromise(); // pasamos el APIURL, concatenamos con tarea y le pasamos como argumento tarea desde la vista
    }
}

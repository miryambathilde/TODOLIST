import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//decorador
@Injectable()

/* el servicio se encarga de hacer un peticion get a la url e injectar
estos datos en un componente */
export class WebService {
    constructor (private http: HttpClient){}

    getTask(){
        return this.http.get('http://localhost:1234/tareas').toPromise();
    }
}
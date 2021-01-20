//creamos un servicio//

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //al ser un servicio es un injectable

@Injectable()

export class WebService {
    constructor (private http: HttpClient){}

    getTask(){
        return this.http.get('http://localhost:7070/api/tareas').toPromise();
    }
}

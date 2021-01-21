import { Component } from '@angular/core';
import { NavComponent } from './nav.component'; //import statement

@Component({
  selector: 'app-root',
  template: '<nav></nav><router-outlet></router-outlet>', //cabecera de nav y el router para ir modificando los distintos componentes
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

}

/* router-outlet: va a estar llamando desde el enrutador a cualquiera que sea el componente activo */
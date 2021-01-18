import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 'Hola {{title}} <tareas></tareas><mat-slider min="1" max="100" step="1" value="1"></mat-slider>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}

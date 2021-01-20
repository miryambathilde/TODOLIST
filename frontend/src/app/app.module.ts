import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas.component';
import { NuevaTareaComponent } from './nueva-tarea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input'; //INPUT FORM
import {MatButtonModule} from '@angular/material/button'
import { WebService } from './web.service'; //es un provider//
import { FormsModule } from '@angular/forms'; //import statement

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NuevaTareaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TareasComponent } from './tareas.component';

/* nuestras rutas, por defecto la dejamos vacía para que vaya a la raiz*/
const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'tareas',
    component: TareasComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

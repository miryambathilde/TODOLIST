import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service'; //importamos el servicio AuthService


@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styles: [`
   .error{
     background-color: #ff4081;
   }
  `]
})
export class RegisterComponent {
  form: any;
  constructor(private fb: FormBuilder, private auth: AuthService){ //declaramos como privado el servicio AuthService
    this.form = fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, validEmail()]], //metodo validador email//
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    }, {validator: isntSame('password', 'cpassword')}); //metodo de validador adicional de password//
  }

  onSubmit(){
    console.log(this.form.errors);
    this.auth.register(this.form.value); //aqui llamamaos al metodo register que tenemos en el servicio authService, espera por parametro los valores del formulario
  }

  isValid(control){
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

}

//Booleano para validador de password - que tienen que coincidir//
function isntSame(field1, field2){
  return form => {
    if (form.controls[field1].value !==  form.controls[field2].value){
      return{ isntSame: true}
    }
  }
}

//PEGAMOS EL CODIGO JAVASCRIPT DE REGEX//
function validEmail(){
  return control =>{
    // tslint:disable-next-line:max-line-length
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(control.value) ? null : {invalidEmail: true}
}
}

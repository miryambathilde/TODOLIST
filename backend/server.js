var express = require('express');
var cors = require('cors'); //cors
var app = express();
//variable CORS con su configuración SINGLE CORS
var corsOpt = {
    origin: 'http://localhost:4200', //URL que acepta el SINGLE CORS
    optionSuccessStatus: 200 //DEVUELVE 200 si todo es correcto
}

//creamos la variable tareas con el objeto que tenemos en tareas.component.ts//
var tareas = [{trabajo: 'Primera tarea', usuario: 'Miryam Bathilde'},
            {trabajo: 'Segunda tarea', usuario: 'Oliver Crevillen'}];



/*peticion a tareas y ponemos que devuelva de respuesta un json y le pasamos las tareas*/
app.get('/tareas', cors(corsOpt),(req, res)=>{
    res.json(tareas); //
})

/* para arrancar la aplicacion de express tenemos que utilizar un puerto, podemos
poner el puerto que queramos siempre que no coincida con otro puerto que estemos utilizando */
app.listen(1234);


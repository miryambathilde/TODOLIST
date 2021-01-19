var express = require('express');
var app = express();

//creamos la variable tareas con el objeto que tenemos en tareas.component.ts//
var tareas = [{trabajo: 'primera tarea', usuario: 'Miryam'},
            {trabajo: 'segunda tarea', usuario: 'Oliver'}];

/*peticion a tareas y ponemos que devuelva de respuesta un json y le pasamos las tareas*/
app.get('/tareas', (req, res)=>{
    res.json(tareas); //
})

/* para arrancar la aplicacion de express tenemos que utilizar un puerto, podemos
poner el puerto que queramos siempre que no coincida con otro puerto que estemos utilizando */
app.listen(1234);
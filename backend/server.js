var express = require('express');
var cors = require('cors'); //cors
var bodyParser = require('body-parser') //parseador JSON para express
var app = express();
//variable CORS con su configuración SINGLE CORS
var corsOpt = {
    origin: 'http://localhost:4200', //URL que acepta el SINGLE CORS
    optionSuccessStatus: 200 //DEVUELVE 200 si todo es correcto
}

//creamos la variable tareas con el objeto que tenemos en tareas.component.ts//
var tareas = [{trabajo: 'Primera tarea', usuario: 'Miryam Bathilde'},
            {trabajo: 'Segunda tarea', usuario: 'Oliver Crevillen'}];


/* METODOS */
app.use(bodyParser.json()); //ponemos nuestro metodo para el PARSEADOR JSON

/*ENRUTADORES*/
var api = express.Router(); //ENRUTADOR DE EXPRESS

/*peticion a tareas y ponemos que devuelva de respuesta un json y le pasamos las tareas*/
api.get('/tareas', cors(corsOpt),(req, res)=>{
    res.json(tareas); 
})

/*POST, va a tener una peticion que va a tener un body donde yo voy a 
escribir la tercera tarea por ejemeplo. Una vez que yo muestre los datos,
respondere con un estatus 200 si esta todo OK */
api.post('/tarea', cors(corsOpt),(req, res)=>{
    tareas.push(req.body); 
    res.sendStatus(200);
})

/* Mi aplicación va a utilizar de base api rest, y le pasamos como parametro api, 
que es nuestro enrutador*/
app.use('/api', api);

/* para arrancar la aplicacion de express tenemos que utilizar un puerto, podemos
poner el puerto que queramos siempre que no coincida con otro puerto que estemos utilizando */
app.listen(7070);


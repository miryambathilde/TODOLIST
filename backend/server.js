/* Dependencias implicitas */
var express = require('express');
var cors = require('cors'); //cors
var bodyParser = require('body-parser'); //parseador JSON para express
var jwt = require('jsonwebtoken'); //libreria que genera los TOKENS jwt= json web TOKEN
var config = require ('./configs/config'); //variable que contiene nuestro archivo de congiguración

var app = express();
//variable CORS con su configuración SINGLE CORS
var corsOpt = {
    origin: 'http://localhost:4200', //URL que acepta el SINGLE CORS
    optionSuccessStatus: 200 //DEVUELVE 200 si todo es correcto
}

//creamos la variable tareas con el objeto que tenemos en tareas.component.ts//
//ponemos identificadores a las tareas//
var tareas = [{_id: 1, trabajo: 'Primera tarea', usuario: 'Miryam Bathilde'},
            {_id: 2, trabajo: 'Segunda tarea', usuario: 'Oliver Crevillen'}];

var users = [{nombre: 'Miryam', email: 'nomail@gmail.com', password: '1234', id: 0}]; //creamos la var user


/* METODOS */
app.use(bodyParser.json()); //ponemos nuestro metodo para el PARSEADOR JSON

/*ENRUTADORES*/
var api = express.Router(); //ENRUTADOR DE EXPRESS
var auth = express.Router(); //ENRUTADOR AUTH DE EXPRESS 
//API REST CORS//
api.use(cors())

/*peticion a tareas y ponemos que devuelva de respuesta un json y le pasamos las tareas*/
api.get('/tareas', cors(corsOpt),(req, res)=>{
    res.json(tareas); 
})
/* duplicamos el metodo GET y le agregamos a la ruta :username y definimos las variables, 
username y resultado, de este metodo nos devuelve las tareas filtrado por username y 
nos mostrará solamente aquellas que introduzco por parametro */
api.get('/tareas/:username', cors(corsOpt),(req, res)=>{
    var username = req.params.username;
    var resultado = tareas.filter(tarea => tarea.usuario == username);
    res.json(resultado); 
})

/*POST, va a tener una peticion que va a tener un body donde yo voy a 
escribir la tercera tarea por ejemeplo. Una vez que yo muestre los datos,
respondere con un estatus 200 si esta todo OK */
api.post('/tarea', cors(corsOpt),(req, res)=>{
    tareas.push(req.body); 
    res.json(req.body); // cambiamos sendStatus(200); por json(req.body)
})

auth.use(cors())

auth.post('/login', cors(corsOpt),(req, res)=>{
    var user = user.find(user => user.email == req.body.email); //encuentrame al usuario, que tengo almacenado en la var user, cuyo email coincide con el que me esta llegando
    if(!user)
    senderrorauth(res);
    if (user.password == req.body.password)
    sendtoken(user, res);
    else
    senderrorauth(res);
})

auth.post('/register', cors(corsOpt),(req, res)=>{
    var index = users.push(req.body) -1; //con esto conseguimos el valor del indice numerico del usuario cuando se cree 
    var user = users [index]; //este es el valor que vamos a pasar cuando se cree el token
    user.id = index;
    sendtoken(user, res);
})

function sendtoken(user, res) {
    var token = jwt.sign (user.id, config.llave); //aqui tenemos la libreria con el metodo sign
    res.json({nombre: user.nombre, token}); //convertimos el token en un objeto y lo asociamos a nombre, concatenandolo con user.nombre
}

function senderrorauth(res){
    return res.json({success: false, message: 'Email o password erroneo'});
}

/* Mi aplicación va a utilizar de base api rest, y le pasamos como parametro api, 
que es nuestro enrutador*/
app.use('/api', api);
app.use('/auth', auth); //api REST DE AUTH

/* para arrancar la aplicacion de express tenemos que utilizar un puerto, podemos
poner el puerto que queramos siempre que no coincida con otro puerto que estemos utilizando */
app.listen(7070);


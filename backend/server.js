var express = require('express');
var app = express();

/* aqui manejamos una peticion cuando el usuario haga una peticion (req) a la raiz
de mi app, y le enviare una respuesta cuando reciba la peticion */
app.get('/', (req, res)=>{
    res.send('Hola Miryam');
})

/* para arrancar la aplicacion de express tenemos que utilizar un puerto, podemos
poner el puerto que queramos siempre que no coincida con otro puerto que estemos utilizando */
app.listen(1234);
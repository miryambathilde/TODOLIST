const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our login application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
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

api.get('/users/yop', cors,{corsOpt}, ckeckauth, (req, res)=>{
    res.json(users[req.user])
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
//DECLARACIÓN middleware es cheackauth//
function checkauth (req, res, next) {
    if(!req.header('Authorization'))
    return res.status(401).send({message: 'No tienes autorización'})
    var token = req.header('authorization').split(' ')[1];
    var decode =jwt.verify(token, config.llave);
    if(!decode)
    return res.status(401).send({message: 'El token no es válido'})
    req.user = decode;
    console.log('ID usuario: ', decode)
    next();
}
/* Mi aplicación va a utilizar de base api rest, y le pasamos como parametro api, 
que es nuestro enrutador*/
app.use('/api', api);
app.use('/auth', auth); //api REST DE AUTH

/* para arrancar la aplicacion de express tenemos que utilizar un puerto, podemos
poner el puerto que queramos siempre que no coincida con otro puerto que estemos utilizando */
app.listen(7070);


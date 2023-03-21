//1. Invocar express
const express = require ('express');
const app = express();

//2. Setear urlencodede para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3. Invocar a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//4. Setear el directorio public
app.use('/resources', express.static('public'));
app.use('/resource', express.static(__dirname + '/public'));

//5. Establecer el motor de plantillas
app.set('view engine', 'ejs')

//6. Invocar a bcryptjs
const bcryptjs = require('bcryptjs');

//7. Variable de sesion
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));

//8. Invocar al módulo de conexion de la base de datos
const connection = require('./database/db');

//9. Estableciendo las rutas
app.get('/', (req, res) => {
    res.render('index', {msg:'ESTO ES UN MENSAJE DESDE NODE'});
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.listen(3000, (req, res) => {
    console.log("listening on http://localhost:3000")
})
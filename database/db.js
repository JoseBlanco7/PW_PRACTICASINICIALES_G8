//ACA SE MANEJARA LA CONEXION CON MYSQL

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASWORD,
    database: process.env.DB_DATABASE
});


connection.connect((error)=>{
    if(error){
        console.log('Error de conexión en: '+error);
        return;
    }
    console.log('Conectado correctamente a la BD ');
});
module.exports = connection;
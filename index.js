//es como una importacion
const express = require('express')//para tener el paquete de express
//importando un nuevo paquete path
const path = require('path')
//nos habilita el dotenv para trabajar con las variables de entorno
require('dotenv').config()//esto es util cuando quieres llevar a produccion la app
//inicializa una aplicacion de express
const app = express()

//node server
const server = require('http').createServer(app)
//importar libreria de socket
module.exports.io = require('socket.io')(server)//para el archivo sockets

//llama a los sockets del archivo sockets.js
require('./sockets/socket')





//Path público
const publicPath = path.resolve( __dirname, 'public' )
//apunta a la carpeta public

//para decirle a express que utilice mi carpeta, en la que tengo mi web
app.use( express.static( publicPath ))



//esta escuchando el puerto process.env.PORT, buscando un error
//process.env.PORT llama el proceso a la carpeta .env y busca un puerto
server.listen( process.env.PORT, ( err ) => {

    //si encuentra el error, lo muestra en consola
    if ( err) throw Error(err)

    console.log('Servidor corriendo en puerto!!!', process.env.PORT)

})

//comandos del package.json:
    //npm start sin el listener de cambios
    //npm run start:dev con el listener de cambios
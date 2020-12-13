const { io } = require('../index')

//mensajes de sockets, client es una computadora que se acaba de conectar a mi socket server
io.on('connection', client => {
    console.log('Cliente conectado')

    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    })
    //escuchas
    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload)
        //emites
        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } )
    })
})

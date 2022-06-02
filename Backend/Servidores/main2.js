const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    console.log("Recibimos la respuestas " + new Date().getTime())
    respuesta.end('Hola mundoss')
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port }`);
})
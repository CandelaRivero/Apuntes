const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    let date = new Date(Date.now());
    let hour = date.getHours();
    if (hour >= 6 && hour <= 12) {
        respuesta.end('Buenos dias!');
    } else if (hour >= 13 && hour <= 19) {
        respuesta.end('Buenas tardes!');
    } else {
        respuesta.end("Buenas noches!")
    }
});

const connectedServer = server.listen(8080, () => {
    console.log(
        `Servidor Http escuchando en el puerto ${connectedServer.address().port}`
    );
});
const fs = require('fs');

let myJson = fs.readFile('/package.json', (error, contenido) => {
    if (error) {
        console.log("No se pudo leer el archivo");
    } else {

        const info = {
            contenidoStr: contenido.toString(),
            contenidoObj: JSON.parse(contenido)
        }
        console.log(info);
        fs.writeFile('./info.txt', JSON.stringify(info.contenidoObj, null, 2), error => {
        if (error) {
            console.log("Hubo un error escribiendo")
        } else {
            console.log("Se escribio info.txt")
        }
        })
    }
})
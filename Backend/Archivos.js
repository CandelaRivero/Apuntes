const { log } = require('console');
const fs = require('fs')
contenido = `Esto es un contenido de prueba`
fs.appendFileSync(`test2.text`, contenido);


// Manejo de errores
const fs = require('fs')

try {
    const data = fs.readFileSync('./test3.text')
} catch(err) {
    console.log(err) // muestra el error
    console.log("No se encontro")
}


// ejemplo

const fs = require('fs');

fs.readFile('./fyh.text', 'utf-8', (error, contenido)=> {
    if (error) {
        console.log("No se pudo leer el archivo");
    } else {
        console.log(contenido);
    }
})

//ejemplo
fs.writeFile('./fyh.text', 'NUEVO CONTENIDO', error => {
    if(error) {
        console.log("No se pudo escribir el archivo");
    } else {
        console.log("Se pudo guardar");
    }
})

// ejemplospara entregable
async function escribir() {
    try {
        await fs.promises.writeFile('/ruta/al/archivo', 'TEXTO DE PRUEBA')
        console.log('guardado!')
    }
    catch(err) {
        //hubo un error, no puede escribirlo, hacer algo
    }
}
escribir()

//ejemplo

const fs = require('fs');
function leerTC() {
    fs.promises.readFile('ruta/al/archivo', 'utf-8')
    .then(contenido => {
        console.log(contendio);
    })
    .catch(err => {
        console.log("error de lectura", err)
    })
}
leerTC()

async function leerAA() {
    try {
        const contendio = await fs.promises.readFile('ruta/al/archivo', 'utf-8')
        console.log(contenido)
    }
    catch(err) {
        console.log('error de lectura', err);
    }
}
leerAA()

// ejemplo 
const fs = require('fs');

async function leerA() {
    try {
        const contendio = await fs.promises.readFile('./file.txt', 'utf-8')
        console.log(contenido)
    } catch(err) {
        console.log('Error de lectura!', err)
    }
}

console.log('Hola mundo')
leerA()
console.log("Chau!");

// ejemplo
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(()=> resolve ('I did something'), 3000)
        // throw 'simula error'
    })
}

async function dS() {
    try {
        console.log(await doSomethingAsync())
    }catch(ex){
        console.log("Ha ocurrido un error: " + ex);
    }
}
console.log('Before')
//doSomethingAsync()
dS()
console.log("After");
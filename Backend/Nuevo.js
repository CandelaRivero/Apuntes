// CALLBACKS

//TEORIA
const ejecutar = unaFuncion => unaFuncion()
const saludar = () => console.log('saludos');
ejecutar(saludar)


ejecutar(() => console.log(('saludos')))

const ejecutar1 = (unaFuncion, params) => unaFuncion(params)
 const saludar1 = nombre => console.log( (`saludos,${nombre}`))
 ejecutar(saludar, 'terricola')

//EJEMPLO
const mostrarEnPantalla = (mensaje) => console.log(mensaje);
const warnEnPantalla = (mensaje) => console.warn("Warn: " + mensaje);
const errEnPantalla = (mensaje) => console.error("Error: " + mensaje);

function contar(inicio, fin, mostrar) {
    for (i = inicio; i <= fin; i++) {
        mostrar(i);
    }
}

contar(1,5,((mensaje) => console.log("Custom: " + mensaje)))
// contar(1,4,mostrarEnPantalla);


function escribirYLoguear(texto, callbackLog) {
    // funcion que escribe a un archivo el texto dado
    escribirArchivo(texto)  //log(texto)
    // se ejecuta el callback
    callbackLog('escrito con exito')  // callbackLog('escrito con exito', texto) 
}

const logger = (mensaje) => {
    const fecha = new Date().toLocaleTimeString()
    console.log(`${fecha}: ${mensaje}`)  //console.log(`${fecha}: ${mensaje}, ${texto}`)
}

escribirYLoguear("Yo soy Andres", logger)
escribirYLoguear("Tengo 32", logger)



// EJEMPLO 3
                    //parametros
function operacion(val1, val2, callback) {
    return callback(val1, val2)
}
     //funcion suma, resta, multiplicacion y division
const suma = (val1, val2) => val1 + val2;
const resta = (val1, val2) => val1 - val2;
const mult = (val1, val2) => val1 * val2;
const div = (val1, val2) => {
    if (val2 !=0) {
        return val1 / val2
    } else {
        return undefined
    }
}
const modulo = (val1, val2) => val1 % val2;

// let operacion = "suma"
// if (operacion == "suma") {
//     operacion(1,2,suma);
// }

 
console.log(operacion(1,2,suma));
console.log(operacion(1,2,resta));
console.log(operacion(4,2,mult));
console.log(operacion(1,2,div));
console.log(operacion(4,2,modulo));



// PROMESAS
function dividir (dividiendo, divisor) {
    return new Promise ((resolve, reject) => {
        if (divisor == 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividiendo / divisor)
        }
    })
}

dividir(10,2)
.then(resultado => {  // then es la llamada al resolve, su callback
    console.log(`resultado: ${resultado}`);
})
.catch(error => {
    console.log(`error: ${error}`);
})

dividir(10,0) // esta debe dar error pq no se puede dividir por cero
.then(resultado => {  
    console.log(`resultado: ${resultado}`);
})
.catch(error => {
    console.log(`error: ${error}`);

})


//ejemplo
new Promise (function(resolve, reject) {
    setTimeout(() => resolve(1), 1000)
})
.then(result => {
    console.log(result);
    return result * 2; //2
})
.then(result => {
    console.log(result);
    return result * 2; //4
})




// ejemplo
Promise.resolve(20)
.then(x => x +1)
.then(x => x * 2)
.then(x => {
    if(x==22) throw 'Error'
    else return 80
})
,then(x => 30)
.then(x => x / 2)
.then(x=> console.log((x)) )
.catch(console.log) 

// ejemplo que tira error
Promise.resolve(10)
.then(x => x + 1)
.then(x => x * 2)
.then(x => {
    if(x==22) throw 'Error'
    else return 80
})
,then(x => 30)
.then(x => x / 2)
.then(console.log)
.catch(console.log) 

// ejemplo que tira 30
Promise.reject(30)
.then(x => x + 1)
.then(x => x * 2)
.then(x => {
    if(x==22) throw 'Error'
    else return 80
})
,then(x => 30)
.then(x => x / 2)
.then(console.log)
.catch(console.log) 


// SINCRONISMO VS ASINCRONISMO
// SINCRONICA
function funA() {
    console.log(1)
    funB()
    console.log(2)
}
function funB() {
    console.log(3)
    funC()
    console.log(4)
}
function funC() {
    console.log(5);
}

funA()


// ejemplo
const delay = ret => {for(let i =0; i<ret; i++);}

function hacerTarea(num) {
    console.log('haciendo tarea' +num)
    delay(100)
}

console.log('inicio de tarea');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('fin de tarea')
console.log('otras tareas')

// ejemplo asincronico
function hacerTarea(num, cb) {
    console.log(('haciendo tarea' + num))
    setTimeout(cb,100)
}

console.log('inicio de tareas');
hacerTarea(1, ()=> {
    hacerTarea(2,()=> {
        hacerTarea(3, ()=> {
            hacerTarea(4, ()=> {
                console.log('fin de tareas')
        })
      })
    })
})

console.log('otras tareas ...');

// setInterval

let miInterval = setInterval((a,b) => {
    console.log("Paso 1 sg")
    console.log(a)
    console.log(b)
}, 1000, "Param1", "Param2")

setTimeout(() => {
    clearInterval(miInterval)
}, 5100)

// setTimeout(() => {
//     console.log("Hola mundo")
// }, 2000);
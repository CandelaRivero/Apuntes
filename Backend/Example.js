console.log("hola");
console.warn("Un warning");

console.error("Un error");


var a = "Hola mundo";
console.log(a);





/* ejemplo usando var*/

function ejemploVar () {
    var i = 2;
    if (true) {
        var i =3;
    }
    console.log(i);
}

ejemploVar ();


// ejemplo usando let

function ejemploLet () {
    let i = 2;
    if (true) {
        let i = 3;
        console.log(i);
    }
    console.log(i);
}

ejemploLet()

// ejemplo usando const
function ejemploConst() {
    const i = 2
    if (true) {
        const i = 3;
    }
    console.log(i);

}
ejemploConst()



// objetos modificables
 const miObjeto = {
     Nombre: 'Juan',
     Edad: 32
 }
 console.log(miObjeto);

 miObjeto.Nombre = "Pedro"
 console.log(miObjeto);



 // los strings son inmutables
 const miString = "Abcdef";
 console.log(miString);

 miString[0] = "1";
 console.log(miString);



 //declaracion y uso de una funcion
 function saludar (nombre) {
     console.log("Hola " + nombre);
 }
 saludar("Maria");
 saludar("Pedro");
 saludar()



 //Default values
 function default_value(nombre = "Josefina") {
     console.log("Hola "+ nombre);
 }
 default_value("Pedro");
 default_value();


 // Anonimas
 let calcularEdad = function (nacimiento) {
     return 2022-nacimiento;
 }
console.log(calcularEdad(1990));
calcularEdad = function (nacimiento) {
    return nacimiento;
}
console.log(calcularEdad(1990));


// funcion clasica que devuelve funciones anonimas
function devuelve_funcion() {
    return function(mensaje) {
        console.log("---" + mensaje + "---");
    }

}
let llamador = devuelve_funcion();
llamador("mi mensaje");



//Arrow  arg=argumento
let foo = (arg1, arg2) =>arg1 +arg2;
console.log((foo(1,2)));



// arrow explicitas
let arrow_explicita = (num) => {
    num = num / 2;
    return num + 1;
};
console.log(arrow_explicita(20));


// Inmediate Instance funcion inmediate
console.log((nacimiento => 2022-nacimiento) (1990))




// Template String
var1 = 5;

let a = `cadena`;

let b = `cadena`;
`multi linea`;

let c = `cadena ${var1} interpolada`;

console.log(a);
console.log(b);
console.log(c);







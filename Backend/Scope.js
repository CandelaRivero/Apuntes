//Scope

//global
let a = 5;

function sumar_a(numero) {
    return a + numero;
}

console.log(sumar_a(4));  //9

//scooped
function sumar_b(numero) {
    let b = 5;
    return b + numero;
}
console.log(sumar_b(5)); //10

console.log(a+5); //funciona
console.log(b+5); //falla
const momet = require ("moment")

const actual = moment ()
const nacimiento = moment("05/05/1990", "DD/MM/YY")

console.log('Hoy es', actual.format("DD/MM/YY"))
console.log("Naci el", nacimiento.format("DD/MM/YY"))

let diferencia_days = actual.diff(nacimiento, 'days')
let diferencia_years = actual.diff(nacimiento, 'years')


console.log(diferencia_days)
console.log(diferencia_years);
// Closure


 //devolver una funcion desde otra funcion
 function generarCalculo() {
     let contador = 0;
     return function() {
         contador++;
         return contador;
     }
 }

 let d = generarCalculo();
 console.log(d());
 console.log(d());
 console.log(d());

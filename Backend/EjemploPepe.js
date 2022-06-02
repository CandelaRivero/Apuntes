let nombre = "pepe";
let edad = 25;
let precio = 99.90 ;
let series = ["Dark", "Mr Robot", "Castelvania"];
let peliculas = [
    {
        Nombre: "Dracula",
        Lanzamientos: "1992",
        Protagonistas: ["Gary OLdman" , "Winona Ryder"]
    },
    {
        Nombre: "Mi gran casamiento griego",
        Lanzamiento: "2002",
        Protagonistas: ["Nia Vardalos", "Michael Constantine"]
    }
]

// punto 1 
console.log(nombre);
console.log(edad);
console.log(precio);
console.log(series);
console.log(peliculas);

// punto 2
edad = edad + 1; //edad++
console.log(edad);

//punto 3 agregar una nueva serie
series.push ("Bridgerton");
console.log(series);

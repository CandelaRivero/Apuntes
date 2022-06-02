class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }



static user = "Nuevos Usuario";


getFullName() {
      console.log("Nombre: " + this.nombre, this.apellido);
}

addMascota() {
    console.log("Mascotas:" + this.mascotas);
}

counterMascotas(){
    return (cantidad) => {
        console.log(cantidad + ":3" + this.mascotas);
    }

}

getBooksNames() {
    console.log("Libros favoritos:" + this.libros);
}

addBook() {
    console.log("Detalles:");
}

}

let usuario = new Usuario(
    'lucas',
    'smith',

    [
        {
            Nombre: 'Harry Potter',
            Autor: 'J. K. Rowling',
        },
    ],
    ['Pixie', 'Felipon', 'Bolt']


)

const mapear = usuario.map()
console.log(mapear);



// let fullName = new Usuario(Lucas, Smith);
// fullName.getFullName();

// let pets =  new Usuario ["Pixie", "Felipon", "Bolt"];
// pets.addMascota();
// counterMascotas();

// let libros = new Usuario["Moby Dick", "Harry Potter", "Percy Jackson"];
// libros.getBooksNames

// let nuevobook = new Usuario [
//     {
//         Nombre: "Harry Potter",
//         Autor: "J. K. Rowling",

//     }
// ]
// nuevobook.addBook();






class Rectangulo {
    constructor (largo, ancho) {
        this.largo = largo;
        this.ancho= ancho;
    }
    static formulaArea = "base * altura";

    mostrarArea() {
        console.log("Area: " + this.largo * this.ancho);

    }

    mostrarFormula() {
        console.log("Formula:" + Rectangulo.formulaArea);
    }
}

let rec1 = new Rectangulo(5,5);
rec1.mostrarArea();
// DECLARAMOS CLASE PRODUCTO

class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categorias = categoria;
        this.precio = precio;
    }
}

// CREAMOS LA FUNCION PARA AGREGAR LA CATEGORIA PRINCIPAL DEL PRODUCTO Y SUS SUBCATEGORIAS

const arrCat = () => {
    let arr = [];
    arr.push(prompt("Ingresa la categoria principal del producto"));

    let cantSubcategorias = parseInt(prompt("Cuantas subcategorias quiere ingresar?")) + 1;

    while (arr.length !== cantSubcategorias) {
        arr.push(prompt('Ingresa una subcategoria.'));
    }

    return arr;
}


const papasFritas = new Producto("Papas Fritas", arrCat(), 250);


// VEMOS EN CONSOLA EL PRODUCTO
console.log(papasFritas);
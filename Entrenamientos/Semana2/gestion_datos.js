//Inicializacion del proyecto
console.log("Gestión de Datos con Objetos, Sets y Maps")


//Definir el objeto productos
const productos = {
    1: {id: 1, nombre: "Lapto", precio: 1500},
    2: {id: 2, nombre: "Mouse", precio: 25},
    3: {id: 3, nombre: "Teclado", precio: 50}
}

console.log("Objeto productos", productos);

//Crear un set con los nombres de los productos
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de productos únicos:", setProductos);


//Crear una map para agregar categorias a los productos
const mapProductos = new Map([
    ["Electrónica", "Laptop"],
    ["Accesorios", "Mouse"],
    ["Accesorios", "Teclado"]
]);
console.log("Map de productos y categorías:", mapProductos);


//Recorrer el objeto productos
for (constid in productos) {
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}
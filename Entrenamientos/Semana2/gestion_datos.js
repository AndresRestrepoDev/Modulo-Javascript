//Inicializacion del proyecto
console.log("Gestión de Datos con Objetos, Sets y Maps")


//Definir el objeto productos
const productos = {
    1: {id: 1, nombre: "Laptop", precio: 1500},
    2: {id: 2, nombre: "Mouse", precio: 25},
    3: {id: 3, nombre: "Teclado", precio: 50}
}
//Anteriormente creo un objeto que contiene varios productos representados por objetos organizado en pares clave:valor

console.log("Objeto productos", productos);
//Este console.log nos muestra lo que tengo almacenado en el objeto desde la consola

//Crear un set con los nombres de los productos
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de productos únicos:", setProductos);
//Declaro una constante setProductos donde almaceno una nueva lista de productos solo con sus nombre sin duplicados por eso se usa el "new Set" y porcedo a imprimir la lista por consola

//Crear una map para agregar categorias a los productos
const mapProductos = new Map([
    ["Electrónica", ["Laptop"]],
    ["Accesorios", ["Mouse", "Teclado"]]
]);
console.log("Map de productos y categorías:", mapProductos);
//Creo un map llamado mapProductos donde como clave tengo las categorias y como valor un arreglo con el nombre de los productos


//Recorrer el objeto productos
for (const id in productos) {
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}
//Este for ... in itera sobre las claves del objeto productos este tiene como claves 1,2,3

//Recorrer el Set de productos
for (const producto of setProductos) {
    console.log("Producto único:", producto);
}
//Este for ... of itera sobre cada valor almacenado en el setProductos y lo imprime

//Recorrer el Map de productos
mapProductos.forEach((productos, categoria) => {
    console.log(`Categoría: ${categoria}`);
    productos.forEach(producto => {
        console.log(` - Producto: ${producto}`);
    });
});
//mapProductos es un Map con categorías como claves, y arrays de productos como valores.
//El método forEach del Map ejecuta la función una vez por cada par clave:valor

//Pruebas
console.log("Pruebas completas de gestión de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos únicos (Set):", setProductos);
console.log("Categorías y productos (Map):", mapProductos);


//uso de Object.keys(), Object.values(), y Object.entries()

const claves = Object.keys(productos);
console.log(claves); 
//Nos da un array con todas las claves del objeto

const valores = Object.values(productos);
console.log(valores);
//Nos da un array con los valores del objeto

const entradas = Object.entries(productos);
console.log(entradas);
//Nos da un array con pares clave:valor


/*La función es una solicitud asincrónica hecha con fetch() para obtener datos desde un servidor local que simula una API (como JSON Server). */

fetch('http://localhost:3000/productos') //Hace una petición GET a la URL
    .then( response => response.json() ) //Espera a que el servidor responda y convierte la respuesta en formato JSON
    .then( data => console.log( "Productos disponibles: ", data ) ) //Muestra en la consola del navegador los productos obtenidos
    .catch( error => console.error( "Error al obtener productos: ", error ) ); //Si ocurre un error lo muestra en la consola.

/* usaremos fetch() con el método POST para agregar un nuevo producto a una base de datos simulada */ 
const nuevoProducto = { id: 5, nombre: "Deademas", precio: 13 };
/* Defino un objeto llamado nuevoProducto que representa un nuevo ítem a guardar en la lista de productos */

fetch('http://localhost:3000/productos', {
    method: 'POST', // Indica que se va a ENVIAR un nuevo recurso
    headers: { 'Content-Type': 'application/json' }, // Especifica que el cuerpo del mensaje es JSON
    body: JSON.stringify(nuevoProducto) // Convierte el objeto JS a una cadena JSON para enviarlo
})
/*Hace una solicitud HTTP POST al servidor falso en la ruta /productos para agregar el producto a la base de datos.*/

    .then(response => response.json())
    .then(data => console.log("Producto agregado:", data))
    .catch(error => console.error("Error al agregar producto:". error));


//Actualización de Datos (PUT): modifica las propiedades de un producto existente. 
const productoActualizado = {id: 1, nombre: "Laptop", precio: 1400 };

fetch('http://localhost:3000/productos/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productoActualizado)
})

    .then(response => response.json())
    .then(data => console.log("Producto actualizado:", data))
    .catch(error => console.error("Error al actualizar producto:", error));


//  elimina un producto del servidor basándote en su ID
fetch ('http://localhost:3000/productos/4', {     //en una API REST, cada recurso (producto, usuario, etc.) se identifica por una ruta única.
    method: 'DELETE'})                              //productos → se refiere a todos los productos  ---  /productos/3 → se refiere al producto con ID 3
    .then(() => console.log("Producto eliminado"))
    .catch(error => console.error("Error al eliminar producto:", error));

//La funcion verifica si producto.nombre está vacío, undefined o falso. Verifica si producto.precio no es un número.
function validarProducto(producto) {
    if(!producto.nombre || typeof producto.precio != "number") {
        console.error("Datos del producto no válidos.");
        return false;
    }
    return true;
}



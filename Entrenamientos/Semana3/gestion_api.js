fetch('http://localhost:3000/productos')
    .then( response => response.json() )
    .then( data => console.log( "Productos disponibles: ", data ) )
    .catch( error => console.error( "Error al obtener productos: ", error ) );
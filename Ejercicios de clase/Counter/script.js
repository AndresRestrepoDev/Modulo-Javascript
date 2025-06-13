// valor inicio 0
let contador = 0;

//selecciono el valor y los botones en base a su ID
const valor = document.getElementById("valor");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnResetear = document.getElementById("resetear");

//agrego el elemento onclick al boton incrementar
btnIncrementar.onclick = function(){
    //aumento su valor +1
    contador++;
    //muestro el valor
    valor.innerHTML = contador;
}


//repito proceso en los botones segun su logica
btnDecrementar.onclick = function(){
    contador--;
    valor.innerHTML = contador;
}

btnResetear.onclick = function(){
    contador = 0;
    valor.innerHTML = contador;
}
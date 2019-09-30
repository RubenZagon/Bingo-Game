const btnSacarNumero = document.querySelector('.btnBegin');
const btnLanzar = document.querySelector('.btnThrow');
const brdPlayer = document.querySelector('.player');
const brdCPU = document.querySelector('.CPU');


const crearArray = () => _.shuffle(_.range(1,91)); //Crea un array de 90 números y los revuelve de manera aleatoria

//Del array de 90 números nos quedamos con 15 para generar los cartones.
const arrayPlayer = crearArray().slice(0, 15); 
console.info("El arrayPlayer es:");
console.log(arrayPlayer);

const arrayCPU = crearArray().slice(0, 15);
console.info("El arrayCPU es:");
console.log(arrayCPU);

// Pasamos los números a mostrar en los cartones
const showCard = function(element, card){

    console.info('Ejecución de la función "showCard');

    card.forEach(function(e){

        let div = document.createElement('div');
        div.className = `numberBoard number${e}`;
        div.textContent = `${e}`;
        element.appendChild(div);
        }    
);
}

// Guardamos los array generados y la funcion que los muestra en una variable para utilizarla en conjunto más adelante. ( Necesitamos que este fuera para poder luego comparar los numeros )

showCard(brdPlayer, arrayPlayer);
showCard(brdCPU, arrayCPU);


///////////    BOLA CENTRAL     ///////////////////
const bingoDIV = document.querySelector('.bingo');

// Creamos el array de 90 números para la bola central
const arrayBingo = crearArray();
console.info("El arrayBingo es:");
console.log(arrayBingo);

//Función simple para imprimir en consola.
const imprimir = (texto1, variable) =>{
    console.info(texto1); console.log(variable)
}; 

const historial = document.querySelector('.restantes span');

const numberBingo = () => {
        
    let numbCenter = arrayBingo.pop();
    imprimir("Número extraido: ", numbCenter);
    imprimir("El bingo ahora queda: ", arrayBingo);
    bingoDIV.textContent = numbCenter;

    historial.textContent = arrayBingo.length;

    const findBall = document.querySelectorAll(".number" + numbCenter);

    for ( let i = 0; i < findBall.length; i++ ){

        findBall[i].classList.add('tachado'); //Es importante no ponerle punto en plan ".tachado" porque te va a incluir la clase ya "tachado"
        _.pull(arrayPlayer, numbCenter);
        _.pull(arrayCPU, numbCenter);
    }
   winner();
}

const winner = () => {
    if (arrayPlayer == 0){
        alert('HAS GANADO');
        btnSacarNumero.classList.add('hidden');
    }
    else if (arrayCPU == 0){
        alert('La maquinita gana');
        btnSacarNumero.classList.add('hidden');
    }
}

btnSacarNumero.addEventListener('click', numberBingo);



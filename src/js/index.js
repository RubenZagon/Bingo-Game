
const btnComenzar = document.querySelector('.btnBegin');
const btnLanzar = document.querySelector('.btnThrow');
const brdPlayer = document.querySelector('.player');
const brdCPU = document.querySelector('.CPU');


/*
const crearArray = function(){
   
    // Desordena el array que hemos creado en un rango de 1 - 91 para que sean 90 números.
    let desordenado = _.shuffle(_.range(1,91));
    
    
    console.info(`Uso de la función "crearArray" a generado el array: `);
    console.log(desordenado);

    return desordenado;
}
*/
//Optimización
const crearArray = () => _.shuffle(_.range(1,91));


/*
La función que creará los cartones.
    -  Devuelve un array con números al azar (1-90)
    - Selecciona los 15 primeros números del array y nos quedamos con ellos.
    - Verificamos que no se deban repetir
*/

const createCard = function () {
    // Creamos un array desordenado que guardamos temporalmente en la variable "desordenado"
    let desordenado = crearArray();

    // Nos quedamos solo con un array de 15 números
    let seleccion = desordenado.slice(0, 15);

    console.info('Nos quedamos con 15 números del Array generado para las cartas: ')
    console.log(seleccion);

    return seleccion;
}

//Optimización
const createCard = () => crearArray(.slice(0, 15));

/*
// Función que creará los cartones y pondrá los números.
    - element: selector del elemento del cartón
    - card: array de números del cartón
    - Crear un <div> por número del cartón
    - Asignar clase "numberBoard" (es un número)
    - Asignar clase "number1" (Si es el número 1)

    <div class ="card">
        <div class= "numberBoard number23">23</div>
    </div>
*/

const showCard = function(element, card){

    console.info('Ejecución de la función "showCard')

    card.forEach(function(e){

        let div = document.createElement('div');
        div.className = `numberBoard number${e}`;
        div.textContent = `${e}`;
        element.appendChild(div);
        }    
);
}

// Guardamos los array generados y la funcion que los muestra en una variable para utilizarla en conjunto más adelante. ( Necesitamos que este fuera para poder luego comparar los numeros )


const comenzar = function(){
    let cartonPlayer = showCard(brdPlayer, createCard());
    let cartonCPU = showCard(brdCPU, createCard());

    // Intercambiamos los botones para comenzar el juego y que no se repita el sacar cartones
    btnComenzar.classList.toggle('hidden');
    btnLanzar.classList.toggle('hidden');

    console.log(cartonPlayer);
    return cartonPlayer;
}

// Botón comenzar, lo que hará será mostrar los cartones y esconder el botón comenzar para que no genere más cartones.
btnComenzar.addEventListener('click', comenzar);


///////////    BOLA CENTRAL     ///////////////////
const bingoDIV = document.querySelector('.bingo');
const btnSacarNumero = document.querySelector('.btnThrow');

const numberBingo = function(funcion){
        
    
    console.info('Se supone que ejecuto la funcion: ');
    console.log(funcion);
   
}

numberBingo(crearArray());

btnSacarNumero.addEventListener('click', numberBingo(crearArray()));

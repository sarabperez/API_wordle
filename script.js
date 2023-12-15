const diccionario= ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra;
let intentos = 6;
const button = document.getElementById("guess-button");


window.addEventListener('load', init)


function init(){

    console.log('Esto se ejecuta solo cuando se carga la pagina web')

    fetch('https://random-word-api.herokuapp.com/word')
        .then(response => response.json())
        .then(data => {
            palabra = data[0].toUpperCase();
            console.log('Palabra aleatoria cargada:', palabra);
        })
        .catch(error => console.error('Error al obtener la palabra aleatoria:', error));
}


function intentar(){
                    
    const INTENTO= leerIntento();

    if (INTENTO.toString() === palabra.toString()) {
        terminar("<h1>GANASTE! </h1>");
        return;
    }

    const GRID = document.getElementById("grid")
    const ROW = document.createElement('div');
    ROW.className = 'row';

    for (let i = 0; i < palabra.length; i++){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i]===palabra[i]){ //verde
            console.log(INTENTO[i], "verde")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851'
        }
        else if( palabra.includes(INTENTO[i])) { //amarillo
            console.log(INTENTO[i], "amarillo")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';        
        } 
        else { //gris
            console.log(INTENTO[i], "gris");
            console.log('INTENTO:', INTENTO);
            console.log('palabra:', palabra);
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }     
            
        ROW.appendChild(SPAN) 
     }
        GRID.appendChild(ROW)   

        if (intentos==0){
            terminar("<h1>PERDISTE! </h1>")
        }
}
                

const input = document.getElementById("guess-input");


button.addEventListener("click", intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

for (let i in palabra){
	console.log(palabra[i]);
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}









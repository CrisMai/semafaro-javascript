
const img = document.getElementById('img'); //constante que recebe a imagem.
const buttons = document.getElementById('buttons'); // constante que recebe os botões
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id](); //usando um objeto consegue armazenar funções e "chamar" ela de forma mais dinâmica.
    
}

const nextIndex = () => {
    if(colorIndex < 2) {
        colorIndex++
    }
    else {
        colorIndex = 0;
    }
}

//const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;    *Ternário

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png', //objeto turnOn com 4 funções
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic':() => intervalId = setInterval(changecolor, 1000)
}



buttons.addEventListener('click', trafficLight); //qdo alguém clicar "chama" o trafficLght.


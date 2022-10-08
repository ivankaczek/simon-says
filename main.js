const $buttonStart = document.querySelector('#start');
const $button01 = document.querySelector('#button01');
const $button02 = document.querySelector('#button02');
const $button03 = document.querySelector('#button03');
const $button04 = document.querySelector('#button04');

function startGame(event){
    pressButton($button01);
    setTimeout(() => {pressButton($button02);}, 3000);
    setTimeout(() => {pressButton($button03);}, 6000);
    setTimeout(() => {pressButton($button04);}, 9000);
    


    //$button01.className = "selected";
    
    
    event.preventDefault();
}

$buttonStart.onclick = startGame;
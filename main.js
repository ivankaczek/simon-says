const $buttonStart = document.querySelector('#start');
const $button01 = document.querySelector('#button01');
const $button02 = document.querySelector('#button02');
const $button03 = document.querySelector('#button03');
const $button04 = document.querySelector('#button04');

function startGame(event){
    //pressButton($button01);

    presRandomButton();

    /*
    setTimeout(() => {pressButton($button02);}, 3000);
    setTimeout(() => {pressButton($button03);}, 6000);
    setTimeout(() => {pressButton($button04);}, 9000);
    */
   

    //$button01.className = "selected";
    
    
    event.preventDefault();
}

function presRandomButton(){
    const randomNum = randomNumber();
    if (randomNum === 1){
        pressButton($button01);
    } else if (randomNum === 2) {
        pressButton($button02);
    } else if (randomNum === 3) {
        pressButton($button03)
    } else if (randomNum === 4) {
        pressButton($button04)
    }
        return randomNum;
}

$buttonStart.onclick = startGame;
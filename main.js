const $buttonStart = document.querySelector('#start');
const $button01 = document.querySelector('#button01');
const $button02 = document.querySelector('#button02');
const $button03 = document.querySelector('#button03');
const $button04 = document.querySelector('#button04');
let correctSequence = [];
let userSequence = [];
let keepGoing = true;
let counter = 0;

function startGame(event){
    
    /*
    let nextInSequence = pressRandomButton();
    correctSequence.push(nextInSequence);
    console.log(`the correct sequence is ${correctSequence}`);
    */
   //let sequence = generateRandomSequence(5);
   //pressButtonN(2);
    //showSequenceOfButtons(sequence);
    /*
    let newSequence = generateRandomSequence(3);
    console.log(newSequence);
    */
    counter++;
     correctSequence = addNextRandomNumber1to4(correctSequence);
     showSequenceOfButtons(correctSequence)    ;


    event.preventDefault();
}

function chooseButton01(event){

userSequence.push(1);
console.log(`the user sequence is ${userSequence}`);
keepGoing = isTheSameSequence(userSequence,correctSequence);
console.log(keepGoing);
event.preventDefault();
}

function chooseButton02(event){

    userSequence.push(2);
    console.log(`the user sequence is ${userSequence}`);
    keepGoing = isTheSameSequence(userSequence,correctSequence);
    console.log(keepGoing);
    event.preventDefault();
}

function chooseButton03(event){

    userSequence.push(3);
    console.log(`the user sequence is ${userSequence}`);
    keepGoing = isTheSameSequence(userSequence,correctSequence);
    console.log(keepGoing);

    event.preventDefault();
}

function chooseButton04(event){

    userSequence.push(4);
    console.log(`the user sequence is ${userSequence}`);
    keepGoing = isTheSameSequence(userSequence,correctSequence);
    console.log(keepGoing);
    event.preventDefault();
}

function pressRandomButton(){
    const randomNum = randomNumber1to4();
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

function pressButtonN(n){
    if (n===1){
        pressButton($button01);
    } else if (n===2) {
        pressButton($button02);
    } else if (n===3) {
        pressButton($button03);
    } else if (n===4) {
        pressButton($button04);
    }
}



$buttonStart.onclick = startGame;
$button01.onclick = chooseButton01;
$button02.onclick = chooseButton02;
$button03.onclick = chooseButton03;
$button04.onclick = chooseButton04;
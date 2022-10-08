const $buttonStart = document.querySelector('#start');
const $button01 = document.querySelector('#button01');
const $button02 = document.querySelector('#button02');
const $button03 = document.querySelector('#button03');
const $button04 = document.querySelector('#button04');
let correctSequence = [];
let userSequence = [];
let keepGoing = true;

function startGame(event){
    
    /*
    let nextInSequence = pressRandomButton();
    correctSequence.push(nextInSequence);
    console.log(`the correct sequence is ${correctSequence}`);
    */
   let sequence = [2,3,4,1,2];
   //pressButtonN(2);
    showSequenceOfButtons(sequence);

    
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

function showSequenceOfButtons(sequence){
    console.log(sequence);
    for (let i = 0; i < sequence.length; i++) {
        let nextNumber = sequence[i];
        let delay = 2000*(i+1);
        setTimeout(() => {pressButtonN(sequence[i])}, delay);
        
    }
}

function isTheSameSequence(numbers01,numbers02){
    let isTheSame = true;
    for (let i = 0; i < numbers01.length; i++) {
        if(numbers01[i]!==numbers02[i]){
            isTheSame = false;
        }
      }
    return isTheSame;
 
}

$buttonStart.onclick = startGame;
$button01.onclick = chooseButton01;
$button02.onclick = chooseButton02;
$button03.onclick = chooseButton03;
$button04.onclick = chooseButton04;
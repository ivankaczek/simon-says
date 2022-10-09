function pressButton($node){
    const previousClassName = $node.className;
    $node.className = "selected";
    
    setTimeout(() => {$node.className = previousClassName}, 1000);
   
    return false;
}

/*
function pressRandomButton(){
    let randomNumber = Math.floor(Math.random()*4+1);
    console.log(randomNumber);
    return false;
}
*/

function randomNumber1to4(){
    let randomNumber = Math.floor(Math.random()*4+1);
    return randomNumber;
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

function generateRandomSequence(steps){
    let sequence = [];
    for (let i = 0; i < steps; i++) {
        const nextRandomNumber = randomNumber1to4();
        sequence.push(nextRandomNumber);
               
    }
    return sequence;
}

function addNextRandomNumber1to4(sequence){
    const nextNumber2add = randomNumber1to4();
    sequence.push(nextNumber2add);
    return sequence;
}

function restartUserSequence(sequence){
    sequence = [];
    return sequence;
}
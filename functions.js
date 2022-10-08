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

function randomNumber(){
    let randomNumber = Math.floor(Math.random()*4+1);
    return randomNumber;
}
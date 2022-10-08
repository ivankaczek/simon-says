function pressButton($node){
    const previousClassName = $node.className;
    $node.className = "selected";
    
    setTimeout(() => {$node.className = previousClassName}, 1000);
    //setTimeout($node.className = "button01",1000);
    /*
    setTimeout(() => {console.log("this is the third message")}, 1000);
    */
    return false;
}
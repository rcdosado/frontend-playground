function getColor(){
    return '#' + Math.random().toString(16).slice(2,8);

}

function setBackGround(){
    var bgColor = getColor();

    document.body.style.background = bgColor;
    return bgColor;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        var color = setBackGround();
        var generateHere = document.getElementById("hex");
        generateHere.innerHTML = '<h1> ' + color +'</h1>';
        
    }
}
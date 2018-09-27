function addBaloon() {
    baloon = document.createElement("div");
    baloon.setAttribute("class", "bola");

    p1 = Math.floor((Math.random() + 0.5  ) * 500 );
    p2 = Math.floor((Math.random() + 0.5  ) * 400 );

    baloon.setAttribute("style", "left: "+ p1 + "px; top: " +p2+"px;");
    baloon.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(baloon);

}
var pontos = 0
function estourar(elemento) {

    document.body.removeChild(elemento);
   
    
    
}

function iniciar(){
    setInterval(addBaloon, 1000);
}
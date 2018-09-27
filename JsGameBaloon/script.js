function addBaloon() {
    baloon = document.createElement("div");
    baloon.setAttribute("class", "bola");
    redRandom = Math.floor(Math.random() * 250 )
    blueRandom = Math.floor(Math.random() * 250 )
    greenRandom = Math.floor(Math.random() * 250 )
    
    

    p1 = Math.floor((Math.random() + 0.5  ) * 500 );
    p2 = Math.floor((Math.random() + 0.5  ) * 400 );

    baloon.setAttribute("style", "left: "+ p1 + "px; top: " +p2+"px; background-color: rgb("+redRandom+","+greenRandom+","+blueRandom+");");
    baloon.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(baloon);

}
var pontos = 0
function estourar(elemento) {

    document.body.removeChild(elemento);
    pontos++
    document.getElementById('pontos').innerHTML = 'Pontuacao: '+ pontos;
    

    
}

function iniciar(){
    setInterval(addBaloon, 1500);
    
}
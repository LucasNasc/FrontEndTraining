function ApertouMouse() {

    console.log("Apertou o Mouse!");
}
function SoltouMouse() {

    console.log("Soltou Mouse");
}
function OnMouseOver() {

    console.log("mouse em cima");
}
function OnMouseOut() {
    console.log ("mouse fora");
}
function MoveuMouse(){
    console.log("mouse se moveu");
}
function clicou() {
    console.log("clicou");
}
function BotaoDireito() {

    console.log("botao direito");

    return false;
}

// Eventos Teclado 

function ApertouTecla(event) {

    console.log("Apertou tecla:" + event.keyCode );
}

function ApertouTecla2(event) {

 if(event.shiftKey == true && event.keyCode == 69 ) {
    console.log("Você apertou shift + E");
 }


}

function ApertouTecla3(event) {

    console.log("Apertou tecla:" + event.keyCode );
}


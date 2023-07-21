let inputMensage = document.querySelector('#newMensage');
let containerNewMensage = document.querySelector('.chat-window__give');
let chatWindow = document.querySelector('.chat__window');

const socket = new WebSocket("ws://websocket-java-production.up.railway.app/ws");

socket.onmessage = function (event) {
    let mensage = containerNewMensage.cloneNode(true);
   
    var dataAtual = new Date();
    var horaAtual = dataAtual.toLocaleTimeString();
    
    mensage.querySelector('.chat-window__give-msg').innerHTML = '';
    mensage.querySelector('.chat-window__give-msg').innerHTML = event.data;

    mensage.querySelector('.chat-window__give-time').innerHTML = '';
    mensage.querySelector('.chat-window__give-time').innerHTML = horaAtual;

    chatWindow.appendChild(mensage);

    let newMensageSound = document.querySelector('.newMensage__sound');
    newMensageSound.play();

    inputMensage.value = '';

}


function checarEnter(event) {
    if (event.key === "Enter") {
        newMensage();
    }
}

function newMensage () {
    if(inputMensage.value != '') {
        socket.send(inputMensage.value);
    }
}

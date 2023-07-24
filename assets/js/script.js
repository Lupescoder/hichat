let inputMensage = document.querySelector('#newMensage');
let containerNewMensageGive = document.querySelector('.chat-window__give');
let containerNewMensageRecive = document.querySelector('.chat-window__recive');
let chatWindow = document.querySelector('.chat__window');

const socket = new WebSocket("wss://websocket-java-production.up.railway.app/ws");

socket.onmessage = function (event) {
    let mensageGive = containerNewMensageGive.cloneNode(true);
    let mensageRecive = containerNewMensageRecive.cloneNode(true);

    var dataAtual = new Date();
    var horaAtual = dataAtual.toLocaleTimeString();

    let retornoMensagem = event.data.split(":");
    console.log(retornoMensagem)

    if(retornoMensagem[0] === "Enviada"){

    mensageGive.querySelector('.chat-window__give-msg').innerHTML = '';
    mensageGive.querySelector('.chat-window__give-msg').innerHTML = retornoMensagem[1];

    mensageGive.querySelector('.chat-window__give-time').innerHTML = '';
    mensageGive.querySelector('.chat-window__give-time').innerHTML = horaAtual;
    chatWindow.appendChild(mensageGive);
    let newMensageSound = document.querySelector('.newMensage__sound');
    newMensageSound.play();
    inputMensage.value = '';

    }else {
        
        mensageRecive.querySelector('.chat-window__recive-msg').innerHTML = '';
        mensageRecive.querySelector('.chat-window__recive-msg').innerHTML = retornoMensagem;
    
        mensageRecive.querySelector('.chat-window__recive-time').innerHTML = '';
        mensageRecive.querySelector('.chat-window__recive-time').innerHTML = horaAtual;
        chatWindow.appendChild(mensageRecive);

    }
   
   
    

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

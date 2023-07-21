let inputMensage = document.querySelector('#newMensage');
let containerNewMensage = document.querySelector('.chat-window__give');
let chatWindow = document.querySelector('.chat__window');

function checarEnter(event) {
    if (event.key === "Enter") {
        newMensage();
    }
}

function newMensage () {
    let mensage = containerNewMensage.cloneNode(true);
   
    var dataAtual = new Date();
    var horaAtual = dataAtual.toLocaleTimeString();

    if(inputMensage.value != '') {
        mensage.querySelector('.chat-window__give-msg').innerHTML = '';
        mensage.querySelector('.chat-window__give-msg').innerHTML = inputMensage.value;

        mensage.querySelector('.chat-window__give-time').innerHTML = '';
        mensage.querySelector('.chat-window__give-time').innerHTML = horaAtual;

        chatWindow.appendChild(mensage);

        let newMensageSound = document.querySelector('.newMensage__sound');
        newMensageSound.play();

        inputMensage.value = '';

    }
}
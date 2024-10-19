// This is a JavaScript file

$(document).on("click", "#alerta", function(){

    function retorno(){
    }
    navigator.notification.alert("mensagem legal", retorno, "Aviso!", "aceito");
    
});

$(document).on("click", "#confirm", function(){
    function confirma(buttonIndex){

        if(buttonIndex == "1") {
            navigator.notification.alert("Escolheu a opção A");
        } else {
            navigator.notification.alert("Escolheu a opção B");
        }
    }
        navigator.notification.confirm("Escolha A ou B", confirma, "Escolha: ", ['A','B']);
    
});

$(document).on("click", "#beep", function(){
    navigator.notification.beep(4);
});

$(document).on("click", "#vibracao", function(){
    document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate([8000]));
}
});
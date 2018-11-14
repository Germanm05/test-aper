$(document).ready(function () {
    alert('asdasd');

    $('#btn-show').on('click',function () {

        login_popup = window.open('https://gmuriel05.github.io/test-aper/index2.html', 'login-asdasdouth', "height=600,width=800");
        //login_popup = window.open('http://aper.test:1084/index2.html', 'login-asdasdouth', "height=600,width=800");

    })

    var ORIGIN = "https://gmuriel05.github.io";
    //var ORIGIN = "http://aper.test:1084";

    if (window.addEventListener){

        addEventListener("message", listener, false);
    }else{
        attachEvent("onmessage", listener);

    }

    function listener(event){
        console.log(event.origin);

        if(event.origin !== ORIGIN){
            return;
        }
        console.log(event);

        var response   = JSON.parse(event.data);
        console.log(response);
            newMessage = response['newMessage'];
        console.log('newMessage:',newMessage);

        document.getElementById("receiver").innerHTML = "received: "+(newMessage ? newMessage : 'nada')+" from: "+event.origin;

    }


});
$(document).ready(function () {
    // Get the window displayed in the iframe.
    // Get a reference to the 'Send Message' button.
    var btn = document.getElementById('btn-send');

    var ORIGIN = 'file:';

    function sendMessage(e) {
        // Prevent any default browser behaviour.
        e.preventDefault();

        // Send a message with the text 'Hello Treehouse!' to the receiver window.
        window.parent.postMessage(JSON.stringify({ 'newMessage': 'Mensaje desde Ventana!' }), (ORIGIN == 'file:' ? '*' : ORIGIN));
        window.close()
    }

    // Add an event listener that will execute the sendMessage() function
    // when the send button is clicked.
    btn.addEventListener('click', sendMessage);

});


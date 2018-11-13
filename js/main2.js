$(document).ready(function () {
    // Get the window displayed in the iframe.
    // Get a reference to the 'Send Message' button.
    var btn = document.getElementById('btn-send');

    // A function to handle sending messages.
    function sendMessage(e) {
        // Prevent any default browser behaviour.
        e.preventDefault();

        // Send a message with the text 'Hello Treehouse!' to the receiver window.
        window.opener.postMessage('Mensaje desde Ventana!', 'http://aper.test:1084');
        window.close()
    }

    // Add an event listener that will execute the sendMessage() function
    // when the send button is clicked.
    btn.addEventListener('click', sendMessage);


});


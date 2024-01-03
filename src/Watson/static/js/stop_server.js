document.getElementById('stopButton').addEventListener('click', function() {
    fetch('/stop')
        .then(response => response.text())
        .then(data => {
            alert("The server stopped. Please click on 'OK'");
            try {
                window.close(); 
            } catch (e) {
                console.error('Failed to close the tab: ', e);
            }
        })
        .catch(error => console.error('Error:', error));
});
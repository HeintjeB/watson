document.getElementById('stopButton').addEventListener('click', function() {
    fetch('/stop')
        .then(response => response.text())
        .then(data => {
            alert(data);
            try {
                window.close(); 
            } catch (e) {
                console.error('Failed to close the tab: ', e);
            }
        })
        .catch(error => console.error('Error:', error));
});
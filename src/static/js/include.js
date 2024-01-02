function loadDataFrame() {
    const selectedFile = document.getElementById('myDropdown').value;
    fetch(selectedFile)
    .then(response => response.text())
    .then(data => {
        document.getElementById('dataframe-container').innerHTML = data;
    });
}
document.getElementById('myDropdown').addEventListener('change', loadDataFrame);
window.onload = loadDataFrame;

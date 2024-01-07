function loadDataFrame() {
    const selectedFile = document.getElementById('myDropdown').value;
    fetch(selectedFile)
    .then(response => response.text())
    .then(data => {
        document.getElementById('dataframe-container').innerHTML = data;
        const dataframeName = selectedFile.split('.')[0];
        colorNumericColumns(dataframeName);
    });
}

document.getElementById('myDropdown').addEventListener('change', loadDataFrame);
window.onload = loadDataFrame;

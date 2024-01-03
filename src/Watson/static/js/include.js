function loadDataFrame() {
    const selectedFile = document.getElementById('myDropdown').value;
    fetch(selectedFile)
    .then(response => response.text())
    .then(data => {
        document.getElementById('dataframe-container').innerHTML = data;
        colorNumericColumns(); // Call this after setting the innerHTML
    });
}

document.getElementById('myDropdown').addEventListener('change', loadDataFrame);

// Call loadDataFrame on window load to load the initial data
window.onload = loadDataFrame;
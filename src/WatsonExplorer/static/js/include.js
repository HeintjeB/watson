function loadDataFrame() {
    const selectedFile = document.getElementById('myDropdown').value;
    fetch(selectedFile)
    .then(response => response.text())
    .then(data => {
        document.getElementById('dataframe-container').innerHTML = data;
        const dataframeName = selectedFile.split('.')[0];
        colorNumericColumns(dataframeName);

        // Reinitialize DataTables here
        $('#dataframe_id').DataTable({
        // Your DataTables configuration
        });

    });
}

document.getElementById('myDropdown').addEventListener('change', loadDataFrame);
window.onload = loadDataFrame;

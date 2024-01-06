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

// Call loadDataFrame on window load to load the initial data
window.onload = loadDataFrame;

// function loadDataFrame() {
//     const selectedFile = document.getElementById('myDropdown').value;
//     fetch(selectedFile)
//     .then(response => response.text())
//     .then(data => {
//         let csvData = parseCSV(data);
//         displayCSVAsTable(csvData);
//     });
// }

// function parseCSV(data) {
//     let rows = data.split('\n');
//     return rows.map(row => row.split(','));
// }

// function displayCSVAsTable(data) {
//     let container = document.getElementById('dataframe-container');
//     let table = '<table>';

//     // Assuming the first row is headers
//     table += '<tr>';
//     data[0].forEach(header => table += `<th>${header}</th>`);
//     table += '</tr>';

//     // Data rows
//     for (let i = 1; i < data.length; i++) {
//         table += '<tr>';
//         data[i].forEach(cell => table += `<td>${cell}</td>`);
//         table += '</tr>';
//     }

//     table += '</table>';
//     container.innerHTML = table;
// }

// document.getElementById('myDropdown').addEventListener('change', loadDataFrame);
// window.onload = loadDataFrame;

function colorNumericColumns(dataframeName) {
    var container = document.getElementById("dataframe-container");
    var table = container.querySelector("table");
    if (!table) return;

    var headers = table.querySelectorAll("th");
    var rows = table.querySelectorAll("tbody tr");

    // Start from the second column (colIndex = 1)
    for (let colIndex = 1; colIndex < headers.length; colIndex++) {
        let header = headers[colIndex];
        let columnName = header.textContent.trim();
        let columnType = columnDataTypes[dataframeName][columnName];

        if (columnType === "int64" || columnType === "float64") {
            applyColorCoding(rows, colIndex);
        }
    }
}

function applyColorCoding(rows, colIndex) {
    // Extract values from the specified column (excluding the index column)
    var values = Array.from(rows).map(row => {
        // Adjust the index to get the correct <td> element, skipping the first <th> element
        var cell = row.cells[colIndex]; // No need to subtract 1 here as we're dealing with <td> elements
        return cell ? parseFloat(cell.innerText) : NaN;
    }).filter(value => !isNaN(value)); // Filter out non-numeric values

    var minVal = Math.min(...values);
    var maxVal = Math.max(...values);
    var range = maxVal - minVal;

    rows.forEach(row => {
        // Again, adjust the index to get the correct <td> element
        var cell = row.cells[colIndex]; // No need to subtract 1 here
        if (!cell) return; // Skip if cell is not found (for safety)

        var value = parseFloat(cell.innerText);
        var percentile = (value - minVal) / range;

        // Apply the color based on the percentile
        if (percentile < 0.125) {
            cell.className = 'very-low-value';
        } else if (percentile < 0.25) {
            cell.className = 'low-value';
        } else if (percentile < 0.375) {
            cell.className = 'somewhat-low-value';
        } else if (percentile < 0.5) {
            cell.className = 'below-average-value';
        } else if (percentile < 0.625) {
            cell.className = 'average-value';
        } else if (percentile < 0.75) {
            cell.className = 'above-average-value';
        } else if (percentile < 0.875) {
            cell.className = 'high-value';
        } else {
            cell.className = 'very-high-value';
        }        
    });

}
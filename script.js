function setTableWidth(width) {
    document.getElementById("myTable").style.width = width + "px";
}

function setTableStyle(borderWidth, cellSpacing) {
    var cells = document.querySelectorAll("th, td");
    cells.forEach(cell => {
        cell.style.border = borderWidth + "px solid black";
    });
    document.getElementById("myTable").style.borderSpacing = cellSpacing + "px";
}

function setTableBackgroundColor(color) {
    document.getElementById("myTable").style.backgroundColor = color;
}

function resetStyle() {
    document.getElementById("myTable").removeAttribute("style");
    setTableStyle(1, 2);
}

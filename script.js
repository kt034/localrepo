let rowCounter = 1;

document.getElementById("addRow").addEventListener("click", function () {
    const tableBody = document.querySelector("#dynamicTable tbody");

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${rowCounter}</td>
        <td><input type="text" class="form-control"></td>
        <td><input type="text" class="form-control"></td>
        <td><input type="text" class="form-control"></td>
        <td><input type="number" class="form-control"></td>
        <td><input type="number" class="form-control"></td>
        <td><button class="btn btn-danger deleteBtn">-</button>-</td>
    `;
    tableBody.appendChild(row);
    rowCounter++;

    row.querySelector(".deleteBtn").addEventListener("click", function () {
        row.remove();
    });
});

document.getElementById("deleteRow").addEventListener("click", function () {
    const tableRows = document.querySelectorAll("#dynamicTable tbody tr");
    
});
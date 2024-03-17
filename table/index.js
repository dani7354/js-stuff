const tableId = "table"


function getdata() {
    return [
        {
            "name": "John",
            "age": "25",
            "city": "New York"
        },
        {
            "name": "Peter",
            "age": "30",
            "city": "Los Angeles"
        },
        {
            "name": "Paul",
            "age": "35",
            "city": "Chicago"
        },
        {
            "name": "Mark",
            "age": "40",
            "city": "Houston"
        },
        {
            "name": "Andrew",
            "age": "45",
            "city": "Phoenix"
        }
    ];
}

function initializeTable(table) {
    table.empty();
    let tableData = getdata();
    if (tableData.length !== 0){
        let tableHeader = $("<tr></tr>)");
        table.append(tableHeader);

        let columns = Object.keys(tableData[0]);
        $.each(columns, (index, columnName) => {
            tableHeader.append(`<th>${columnName}</th>`);
        });
      
        $.each(tableData, (index, row) => {
            table.append(`<tr><td>${row.name}</td><td>${row.age}</td><td>${row.city}</td></tr>`);
        });
    }
}


$(document).ready(function() {
    let table = $(`#${tableId}`);
    initializeTable(table);
});
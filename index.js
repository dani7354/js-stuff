const valuesSelectBoxId = "#values";
var pageNumber = 1;


function getValues(page) {
    let values = [
        { id: 1, name: "Value 1" },
        { id: 2, name: "Value 2" },
        { id: 3, name: "Value 3" },
        { id: 4, name: "Value 4" },
        { id: 5, name: "Value 5" },
        { id: 6, name: "Value 6" },
        { id: 7, name: "Value 7" },
        { id: 8, name: "Value 8" },
        { id: 9, name: "Value 9" },
        { id: 10, name: "Value 10" },
    ];

    return [values[page - 1]]; // only one item in the array is loaded on each call
}


$(document).ready(function () {
    let selectBox = $(valuesSelectBoxId);
    selectBox.empty();

    
    options = getValues(pageNumber);
    $.each(options, function (index, value) {
        console.log(value);
        let option = $("<option></option>").val(value.id).text(value.name);
        selectBox.append(option);
    });

    let loadMoreItem = $("<option></option>").val("").text("Indlæs flere...");
    selectBox.append(loadMoreItem);
});


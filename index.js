const valuesSelectBox = $("#values");
var page = 1;

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

    return [values[page]]; // only one item in the array is loaded on each call
}

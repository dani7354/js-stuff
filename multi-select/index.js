const loadNextId = "load-next";
const selectBoxId = "values";
const totalItems = 10000;
const pageSize = 100;

var pageNumber = 0;


function getValues(page) {
    let values = [...Array(totalItems).keys()]
        .map(x => { return { id: x + 1, name: `Item ${x + 1}`}});

    let startIndex = (page - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    if (startIndex < 0 || endIndex > values.length) {
        return [];
    }

    return values.slice(startIndex, endIndex);
}

function loadNext(selectBox) {
    pageNumber++;
    let options = getValues(pageNumber);
    $.each(options, function (index, value) {
        let option = $("<option></option>")
            .val(value.id)
            .text(value.name);

        selectBox.append(option);
    });

    loadNextOption = $(`#${loadNextId}`).detach();
    if (options.length !== 0) {
        loadNextOption.appendTo(selectBox);
    }
}

function initializeSelectBox(selectBox) {
    loadNext(selectBox);

    let loadMoreItem = $("<option></option>")
        .text("Indlæs flere...")
        .attr("id", loadNextId);

    loadMoreItem.on("mouseover", function(e) {
        e.preventDefault();
        loadNext(selectBox); 
    });
    selectBox.append(loadMoreItem);
}


$(document).ready(function () {
    var selectBox = $(`#${selectBoxId}`);
    initializeSelectBox(selectBox);
});

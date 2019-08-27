$(document).ready(function () {

    // on page load makes a get request to display all of the products
    $.get('/api/products/all', function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let column = $('<div class="col"');

            // TODO append data to div.col

            $('#product-list').append(column);
        }
    });


});
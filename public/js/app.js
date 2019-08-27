$(document).ready(function () {

    // on page load makes a get request to display all of the products
    $.get('/api/products/all', function (data) {
        for (let i = 0; i < data.length; i++) {

            let column = $('<div class="col"');

            $('#product-list').append(column);
        }
    });


});
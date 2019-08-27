$(document).ready(function () {

    // on page load makes a get request to display all of the products
    // $.get('/api/products/all', function (data) {
    //     console.log(data);
    //     for (let i = 0; i < data.length; i++) {
    //         let column = $('<div class="col"');

    //         // TODO append data to div.col

    //         $('#product-list').append(column);
    //     }
    // });

    $('#product-submit').on('click', function (event) {
        event.preventDefault();

        // Capture user input
        const product_name = $('#product-name').val();
        const price = $('#product-price').val();
        const department_name = $('#product-department-name').val();
        const stock_quantity = $('#product-stock-quantity').val();
        const image_url = $('#product-image-url').val();

        dataToSend = {
            product_name: product_name,
            price: price,
            department_name: department_name,
            stock_quantity: stock_quantity,
            image_url: image_url,  
        };

        $.post('/api/products/', dataToSend, function(){

        }).then(function(results) {
            console.log(results);
        });
    });


});
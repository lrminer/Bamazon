$(document).ready(function () {

    // on page load makes a get request to display all of the products
    $.get('/api/products', function (data) {
        console.log(data);
        // console.log(data[0]);
        for (let i = 0; i < data.length; i++) {
            let column = $('<div class="col">');

            let img = $('<img>').attr('src', data[i].image_url);
            let product_name = $('<h2>').text(data[i].product_name);
            let price = $('<p>').text('Price: $' + data[i].price);
            let department_name = $('<p>').text('Department: ' + data[i].department_name)
            let stock_quantity = $('<p>').text('Stock: ' + data[i].stock_quantity);
            let buy_button = $(`<a class="btn btn-primary" href="/buy/id/${data[i].id}" role="button">`).text('BUY');

            column.append(img, product_name, price, department_name, stock_quantity, buy_button);

            $('#product-list').append(column);
        }

    });

    $('a.department-link').on('click', function (e) {
        e.preventDefault();

        $('#product-list').empty();
        
        const department_name = $(this).attr('value');

        console.log(department_name);

        $.get('/api/products/department/' + department_name, function (data) {
            console.log(data);
        })
    });

    // $('#product-list').append("Hello World");

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
        console.log(dataToSend);

        $.post('/api/products', dataToSend, function () {

        }).then(function (results) {
            console.log(results);
            console.log("Success");
        });

        // $.ajax({
        //     type: "POST",
        //     url: '/api/products',
        //     data: dataToSend,

        // }).then(function (results) {
        //     console.log(results);
        //     console.log("Success");
        // });

    });


});
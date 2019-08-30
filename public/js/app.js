///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// PUT THIS IN SEPARATE FILES BASED ON WHERE THE CLICK EVENT IS HAPPENING
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

$(document).ready(function () {

    // on page load makes a get request to display all of the products
    $.get('/api/products', function (data) {
        console.log(data);
        // console.log(data[0]);
        displayProducts(data);

    });

    $('a.department-link').on('click', function (e) {
        e.preventDefault();

        $('#product-list').empty();

        const department_name = $(this).attr('value');

        console.log(department_name);

        $.get('/api/products/department/' + department_name, function (data) {
            console.log(data);
            displayProducts(data);
        });

    });


    $('#product-submit').on('click', function (event) {

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

        $.post('/api/products/', dataToSend, function () {

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



    function displayProducts(data) {
        for (let i = 0; i < data.length; i++) {
            let column = $('<div class="col product">');


            let img = $('<img>').attr('src', data[i].image_url);
            let product_name = $('<h2>').text(data[i].product_name);
            let price = $('<p>').text('Price: $' + data[i].price);
            let department_name = $('<p>').text('Department: ' + data[i].department_name);
            let stock_quantity = $('<p>').text('Stock: ' + data[i].stock_quantity).attr('value', data[i].stock_quantity);

            // let form = $('<form>').attr('method', 'PUT').attr('action', '/api/products/id/' + data[i].id);

            let buy_amount = $('<input>').attr('placeholder', 'Quantity').attr('type', "number").attr('data-product-id', `${data[i].id}`);

            let buy_button = $(`<input type="button" class="btn btn-primary btn-block buy-btn" href="#" role="button" data-product-id="${data[i].id}">`);

            //         $('<input>').attr('','').attr('','').attr('','')
            buy_button.on('click', function (e) {
                e.preventDefault();
                const which_product = $(this).attr('data-product-id');
                const how_many = $(this).prev().val();
                const stock_quantity = $(this).prev().prev().text();

                dataToSend = {
                    id: which_product,
                    amount: how_many,
                    stock_quantity: stock_quantity
                };
                console.log(dataToSend);

                $.ajax({
                    method: 'PUT',
                    url: '/api/products/id/' + which_product,
                    data: dataToSend
                }).then(function () {
                    console.log('success');
                });
            });

            // form.append(buy_amount, buy_button);

            column.append(img, product_name, price, department_name, stock_quantity, buy_amount, buy_button);

            $('#product-list').append(column);
        }
    }

});
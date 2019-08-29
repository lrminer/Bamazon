$(document).ready(function(){

    $('.buy-btn').on('click', function (e) {
        e.preventDefault();
        const which_product = $(this).attr('data-product-id');
        const how_many = 1;
    
        dataToSend = {
            id: which_product,
            amount: how_many
        };
        console.log(dataToSend);
    });
});

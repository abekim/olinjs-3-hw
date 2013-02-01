$(function() {
  $('#submitOrder').on('click', function () {
    var name = $('#orderName').val();

    var checked = $(':checked');

    var ingredients = [];

    for (var i = 0; i < checked.length; i++) {
      ingredients.push(checked[i].value);
    }

    $.post('/order/new', {name:name, ingreds:ingredients});

    $('#newOrder').html("Your order has been submitted! Please go to /orders to view your orders.")
  });
});

$(function() {
  $('.completed').on('click', function() {
    var orderId = $(this).attr('id');
    
    $.post('/orders', { id: orderId });

    var classic = '.' + String(orderId);

    $(classic).remove();
  });
});
let cart = [];
$(function(){
        let saveData = localStorage.getItem('cartData');
        if(saveData)
            cart = JSON.parse(saveData);
        else
            alert('Cart is Null');
        var html = "";
        let total = 0;
        for(var data of cart){
            total += data.value;
            html += data.items.join(',') + '<br>'
        }
        console.log(total);
        $("#result").html(
            '<h1 id="title">Total :' +  total + '</h1><br>' +
            '<h2 id="please">Please call clerk</h2><br>'
        );
        cart.forEach(function(value){
            $("#result").append('<div id="okonomiyaki">' + value.items.join(',') + '</div>');
        });
    }
);

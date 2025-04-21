let total= 0,resultTotal=0;
let cart_value = [];
var cart = [];
var items = [];
var OkoBool = Boolean("true");
$(function(){

    var param = {
        url : 'data.json',
        dataType : 'json'
    }
    $.ajax(param).done(function(ary){
        var html = '';
        for(var data of ary){
            html += '<div class="item"><img src="' + data[2] + '" class="item_img"><div class="item_button"><button type="button"  onclick="plus(\'' + data[0] + '\','+  data[1] +  ')">' + data[0] + '：' + data[1] + 'yen</button> <button type="button" onclick="removeItem(\'' + data[0] + '\','+  data[1] +  ')">remove</button></div><br>';
            html += '</div>';
        }
        html += '<br>';
        $('#menu').html(html);
    });
});

function plus(name,val){
    if(items.length > 6){
            alert("You can select up to 7 items");
            return;
        }
    if(total == 0)
        if(OkoBool){
            total += 570;
        }
        else{
            total += 530;
        }
    total += parseInt(val) ;
    items.push(name);
    $("#total").html("Total : " + total + "yen");
    $("#items").html(items.join(','));
}

function removeItem(itemName,val)
{
    for(let i = 0; i < items.length; i++){
        if(items[i] == itemName){
            items.splice(i,1);
            total -= val;
            break;
        }
    }
    $("#total").html("Total : " + total + "yen");
    $("#items").html(items.join(','));
}

function addCart(){
    let foodData = {
        items: items.slice(),
        value: total
    };
    items = [];
    total = 0;
    $("#total").html("Total : " + total + "yen");
    $("#items").html(items.join(','));
    cart.push(foodData);
    let cartJSON = JSON.stringify(foodData);

    console.log("カートに追加されたアイテム：", foodData.items);
    console.log("合計金額：", foodData.value + " yen");
    /*cart.push(items.slice());
    items = [];
    cart_value.push(total);
    total = 0;
    $("#total").html("Total : " + total + "yen");
    $("#items").html(items.join(','));*/
}

function writeResult(){
    if(cart.length == 0)
    {
        alert('Cart is empty');
        return;
    }
    let cartJSON = JSON.stringify(cart);
    localStorage.setItem('cartData',cartJSON);
    console.log("カートに追加されたアイテム：", cartJSON);
    /*
    
    for(let  i = 0; i < cart.length; i++)
        resultTotal += cart[i].value;
    $("#result").html(
        '<h1 id="title">Total :' +  resultTotal + '</h1><br>' +
         '<h2 id="please">Please call clerk</h2><br>' +
        '<button type="button" id="back" onclick="Back()">Back Page</button>'
    );
    cart.forEach(function(value){
                $("#result").append('<div id="okonomiyaki">' + value.items.join(',') + '</div>');
        });
    */
}

function getSelectedFood(selectRadio){
    
    if(selectRadio)
    {
        if(selectRadio.value == "OKONOMIYAKI"){
            $("#foodTitle").text("You make original OKONOMIYAKI");
            OkoBool = true;
            total = 0;
        }
        else if(selectRadio.value == "YAKISOBA"){
            $("#foodTitle").text("You make original YAKISOBA");
            OkoBool = false;
            total = 0;
        }
        items = [];
        total = 0;
        $("#total").html("Total : " + total + "yen");
        $("#items").html(items.join(','));
    }
}

$(function(){

    var param = {
        url : 'Menu_okonomiyaki_recommended.json',
        dataType : 'json'
    }
    $.ajax(param).done(function(ary){
        var html = '';
        for(var data of ary){
            html += '<div class="ItemImageSet"><div class="ReccItem"><div class="ItemName">' + data.name + '</div><br>';
            html +=  data.ingredients + '</div><img src="' + data.image + '" class="ItemImage"></div><br>';
        }
        $('#ReccMenu').html(html);
    });
});
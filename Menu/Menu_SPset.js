$(function(){

    var param = {
        url : 'Menu_SPset.json',
        dataType : 'json'
    }
    $.ajax(param).done(function(ary){
        var html = '';
        for(var data of ary){
            html += '<div class="ItemImageSet"><div class="ReccItem"><div class="ItemName">' + data.name + '</div><br>';
            if(data.ingredients)
                html +=  data.ingredients + '</div><img src="' + data.image + '" class="ItemImage"></div><br>';
            else if(data.variations)
                html +=  data.variations + '</div><img src="' + data.image + '" class="ItemImage"></div><br>';
            else 
                html +=  data.items + '</div><img src="' + data.image + '" class="ItemImage"></div><br>';
        }
        $('#ReccMenu').html(html);
    });
});
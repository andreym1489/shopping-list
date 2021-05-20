$("ul").on("click", "li", function() {
    $(this).toggleClass('done');
});

$("h2 span").on("click", function() {
    $("input").fadeToggle('slow');
    
});

$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut('slow', function(){
        $(this).remove();
    });
});

$("input").keypress(function(event){
    if (event.which === 13) {
        var itemText = $(this).val();
        $("ul").append("<li>" + itemText + "<span><i class='fas fa-backspace'></i></span></li>");
        $(this).val('');
    }
});
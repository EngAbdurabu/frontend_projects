var $links = $(".itemLinks");// get itemLinks

$links.click(function  (e){
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translateX(" + position * 25 + "%)"; // نسبة الازاحة 

    $('#wrapper').css({
        transform: translateValue
    });
    
    clickedLink.addClass("active");
});
// this apear in the first time you open site 
$($links[0]).addClass("active");
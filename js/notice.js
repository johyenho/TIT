//notice open
$("#contents ul li a").click(function(e){
    e.preventDefault();
    $(this).siblings("#contents .txt").stop().slideToggle();
    $(this).toggleClass("open");
});
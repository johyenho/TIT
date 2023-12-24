//gnb
$(function(){
    w=960;
    winSize();
    function winSize(){
        winW = $(window).outerWidth()+17;
        if(winW >= w){
            $("#header .twoD").hide();
        }
    }
    $(window).resize(function(){
        winSize();
    });
    $("#header .gnb>ul>li").mouseenter(function(){
        if(winW >= w){
            $("#header .twoD").stop().slideDown(300);
            $("#gnbBg").stop().slideDown(300);
        }
    });
    $("#header .gnb>ul>li").mouseleave(function(){
        if(winW >= w){
            $("#header .twoD").stop().slideUp(300);
            $("#gnbBg").stop().slideUp(300);
        }
    });
    $("#header .gnb>ul>li").click(function(){
        if(winW < w){
            $(".twoD").stop().slideUp();
            $("#header .gnb>ul>li").removeClass("on");
            if($(this).find("#header .twoD").is(':visible')){
                $(this).removeClass("on");
                $(this).find(".twoD").stop().slideUp();
            }else{
                $(this).addClass("on");
                $(this).find(".twoD").stop().slideDown();
            }
        }
    });
});

//mobile button
$("#barMenu").click(function(e){
    e.preventDefault();
    $("#barMenu .bar").toggleClass("active");
    $("#header .gnb").toggleClass("open");
});

//lnb
$("#lnbBar .lnbBar>ul>.lnb_m01").click(function(){
    $("#lnbBar .lnb_choice").stop().slideUp();
    $(".arbutton").removeClass("up");
    if($(this).find(".lnb_choice").is(':visible')){
        $(this).find(".arbutton").removeClass("up");
        $(this).find(".lnb_choice").stop().slideUp();
    }else{
        $(this).find(".arbutton").addClass("up");
        $(this).find(".lnb_choice").stop().slideDown();
    }
});
$("#lnbBar .lnbBar>ul>.lnb_m02").click(function(){
    $("#lnbBar .lnb_choice").stop().slideUp();
    $(".arbutton").removeClass("up");
    if($(this).find(".lnb_choice").is(':visible')){
        $(this).find(".arbutton").removeClass("up");
        $(this).find(".lnb_choice").stop().slideUp();
    }else{
        $(this).find(".arbutton").addClass("up");
        $(this).find(".lnb_choice").stop().slideDown();
    }
});

//banner
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    }
});

//gallery
var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 16,
    observer: true, //서버감시
    boserveParents: true, //서버 초기화
    grabCursor: true,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    // init: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        480: {
        slidesPerView: 1.5,
        spaceBetween: 16,
        },
        768: {
        slidesPerView: 2.5,
        spaceBetween: 24,
        },
        1280: {
        slidesPerView: 3,
        spaceBetween: 24,
        },
    }
});
//popup 2021
$("#popup .pclose").click(function(e){
    e.preventDefault();
    $("#popup").hide();
});
//popup 홈페이지리뉴얼
$("#popup_new .nclose").click(function(e){
    e.preventDefault();
    $("#popup_new").hide();
});
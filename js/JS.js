$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop:true,
        nav:false,
        dots:false,
        margin:0,
        mouseDrag:false,
        touchDrag:false,
        autoplay:true,
        autoplayTimeout:8000,
        smartSpeed:3500,

        responsive:{
            0:{
                items:1

            },

            1000:{
                items:1
            }
        }
    });

});
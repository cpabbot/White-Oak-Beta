$(document).ready(function() {
    
    $(".contact").click(function() {
        $(".contact__img").not($(this).children(".contact__img")).removeClass("js-contact__img--info");
        $(".contact__name").not($(this).children(".contact__name")).removeClass("js-contact__name--info");
        $(this).children(".contact__img").toggleClass("js-contact__img--info");
        $(this).children(".contact__name").toggleClass("js-contact__name--info");
    });
    
//    $(".dot").click(function() {
//        $(".dot").removeClass("dot--current");
//        $(this).addClass("dot--current");
//    });
    
});
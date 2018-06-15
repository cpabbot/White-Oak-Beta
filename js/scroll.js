var main = $(".main");
var vHeight;
var isScrolling = false;
var scrollY = 0;
var lastScrollY = 0;
var page = 0;

$(document).ready(function() {
    
    var sunY = $(".sun").offset().top;
    vHeight = $(".second").offset().top;
    
    var scrollIntervalID = setInterval(animate, 10);
    
    $(".main").scroll(function() {
        checkScroll();
//        parallax($(".tree-background"), 1, 0);
//        parallax($(".sun"), 0.5, sunY);
     });
    
});

function animate() {
    window.requestAnimationFrame(parallaxFixed($(".tree-background"), 0.3));
}

function parallaxFixed($el, amount) {
    var yPos = $(".main").scrollTop();
    var newPos = -yPos*amount;
    $el.css('top', newPos);
}

function parallaxAbsolute() {
//    var yPos = $(".main").scrollTop();
//    var newPos = yPos*0.8;
//    $el.css('top', newPos);
}

function xxxparallax($el, amount, initialOffset) {
    var yPos = $el.offset().top;
//    var newPos = yPos*amount + initialOffset;
    var newPos = -1*yPos + initialOffset;

    $el.css('top', newPos);
}

function checkScroll() {
    if(!isScrolling) {
            scrollY = main.scrollTop();
            //alert(scrollY + " " + lastScrollY);
            if(scrollY > lastScrollY) { // scroll down
                //alert("down");
                scrollDown();
                isScrolling = true;
            }
            else if(scrollY < lastScrollY) { // scroll up
                //alert("up");
                scrollUp();
                isScrolling = true;
            }
        }
}

function scrollDown() {
    page++;
    scrollToPos(vHeight * page);
}

function scrollUp() {
    page--;
    scrollToPos(vHeight * page);
}

function scrollToPos(newYPos) {
    //alert(main.scrollTop() + "  to   " + newYPos + " (" + page + ")");
    main.animate({
        scrollTop: newYPos
    }, 1000, function() {
        setTimeout(function() {
            isScrolling = false
        }, 50);
    })
    lastScrollY = newYPos;
}

function getDist() {
    return Math.abs($(".main").scrollTop());
}
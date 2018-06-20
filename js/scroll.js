var main = $(".main");
var vHeight;
var isScrolling = false;
var scrollY = 0;
var lastScrollY = 0;
var page = 0;
var sunY = $(".sun").offset().top;
var video = document.getElementById('brewerton-mp4');

$(document).ready(function() {
    
    vHeight = $(".second").offset().top;
    video.load();
    
    var scrollIntervalID = setInterval(animate, 10);
    
    $(".main").scroll(function() {
        checkScroll();
//        parallax($(".tree-background"), 1, 0);
//        parallax($(".sun"), 0.5, sunY);
     });
    
});

function animate() {
//    window.requestAnimationFrame(parallaxFixed($(".tree-background"), 0.3));
    parallaxFixed($(".tree-background"), 0.3, 0);
    parallaxFixed($(".sun"), 0.05, sunY);
}

function parallaxFixed($el, amount, offset) {
    var yPos = $(".main").scrollTop();
    var newPos = -yPos*amount + offset;
    $el.css('top', newPos);
}

function parallaxAbsolute() {
//    var yPos = $(".main").scrollTop();
//    var newPos = yPos*0.8;
//    $el.css('top', newPos);
}

function checkScroll() {
    if(!isScrolling) {
            scrollY = main.scrollTop();
            //alert(scrollY + " " + lastScrollY);
            if(scrollY > lastScrollY) { // scroll down
                scrollDown();
            }
            else if(scrollY < lastScrollY) { // scroll up
                scrollUp();
            }
        }
}

function scrollDown() {
    if(page == 3) { page += 6; }
    else { page++; }
    isScrolling = true;
    scrollToPage(page);
}

function scrollUp() {
    if(page == 9) { page -= 6; }
    else { page--; }
    isScrolling = true;
    scrollToPage(page);
}

function scrollToPage(page) {
    var newYPos = Math.round(vHeight * page);
//    alert(main.scrollTop() + "  to   " + newYPos + " (" + page + ")");
    prepareBrewertonAnimation();
    
    main.animate({
        scrollTop: newYPos
    }, 1000, function() {
        pageLanded(page);
        setTimeout(function() {
            isScrolling = false
        }, 50);
    });
    lastScrollY = newYPos;
}

function getDist() {
    return Math.abs($(".main").scrollTop());
}

function pageLanded(page) {
    if(page == 0) {
        video.pause();
        video.currentTime = 0;
        video.load();
    }
//    if(page == 1) {
//        video.play();
//    }
    if(page == 2) {
        video.pause();
        video.currentTime = 0;
        video.load();
    }
}

function prepareBrewertonAnimation() {
    if(page == 1) {
        setTimeout(function() {
            video.play();
        }, 200);
    }
}
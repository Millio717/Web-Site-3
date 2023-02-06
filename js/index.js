$(document).ready(function() {
    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
        elem = $(".about__wrapper-free");

        if(windowWidth < 1145) {
            elem.removeClass('.about__wrapper-free');
        }
        else {
            elem.addClass('.about__wrapper-free');
        }
    }

checkWidth();

$(window).trigger('resize');

})
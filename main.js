function EasyPeasyParallax() {
    scrollPos = $(this).scrollTop();
    $('.parallax.first').css({
        'background-position': '50% ' + (-scrollPos / 4) + "px"
    });
    $('.parallax.second').css({
        'background-position': '50% ' + (-scrollPos / 4) + "px"
    });
    $('.parallax.third').css({
        'background-position': '50% ' + (-scrollPos / 4) + "px"
    });
}

$(document).ready(function () {
    $(window).scroll(function () {
        EasyPeasyParallax();
    });
});
$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('#sticky-bar').addClass('navbar-fixed-top');
        }
        else {
            $('#sticky-bar').removeClass('navbar-fixed-top');
        }
    });
});
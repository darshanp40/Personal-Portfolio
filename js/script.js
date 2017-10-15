$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('nav.navbar').addClass('active');
        } else {
            $('nav.navbar').removeClass('active');
            $('#navigation').removeClass('in');
        }
    });

    $('.navbar-toggle').click(function () {
        if (!$('nav.navbar').hasClass('active')) {
            $('nav.navbar').addClass('active');
        }
    });

    $('.navbar .link-scroll').click(function () {
        $('#navigation').removeClass('in');
    });
    $('.link-scroll').bind('click', function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 80
        }, 1000);
    });
    $('.navbar .link-scroll').click(function () {
        $('#navigation').removeClass('in');
    });

});
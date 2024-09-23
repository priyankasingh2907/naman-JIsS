(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    var carousel = function() {
        $('.featured-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            //animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 15000,
            nav: true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            // navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
        });

    };
    var logo = function() {
        $('.featured-logo').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 15000,
            nav: false,
            dots: false,
            autoplayHoverPause: false,
            items: 5,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,

                }
            }

        });

    };
    var logore = function() {
        $('.recruiter-logo').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 5000,
            nav: false,
            dots: false,
            autoplayHoverPause: false,
            items: 5,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,

                },
                1300: {
                    items: 6,

                },
                2000: {
                    items: 7,

                }
            }

        });

    };
    carousel();
    logo();
    logore();
})(jQuery);
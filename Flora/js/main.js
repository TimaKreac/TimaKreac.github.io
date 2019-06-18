$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('.partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" id="arrow-left" fill="#c3c3c3"  width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,
        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" id="arrow-right" fill="#c3c3c3"  transform="rotate(180)" width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });

    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

        prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" id="arrow-left2" fill="#c3c3c3"  width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,

        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" id="arrow-right2" fill="#c3c3c3"  transform="rotate(180)" width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,
    });

    $('.info-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" id="arrow-left3" fill="#c3c3c3"  width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,

        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" id="arrow-right3" fill="#c3c3c3"  transform="rotate(180)" width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,


    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplaySpeed: 3000,
        asNavFor: '.slider-nav',
        autoplay: true
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]


    });

    $(function () {
        $(".features-form_input").mask("+7 (999) 999-99-99");
        $(".formSale_input").mask("+7 (999) 999-99-99");
    });

    $('#modal').popup();



});
$(document).ready(function () {


    $('.partners-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="d-none d-xl-block" id="arrow-left" fill="#c3c3c3"  width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,
        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="d-none d-xl-block" id="arrow-right" fill="#c3c3c3"  transform="rotate(180)" width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,

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

        prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="d-none d-xl-block" id="arrow-left2" fill="#c3c3c3"  width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,

        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="d-none d-xl-block" id="arrow-right2" fill="#c3c3c3"  transform="rotate(180)" width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,
    });

    $('.info-slider').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        variableWidth: true,
        prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="d-none d-xl-block" id="arrow-left4" fill="#c3c3c3"  width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,
        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" class="d-none d-xl-block" id="arrow-right4" fill="#c3c3c3"  transform="rotate(180)" width="32" height="84" viewBox="0 0 32 84"><g><g><path d="M30 0h2L2 42l30 42h-2L0 42z"/></g></g></svg>`,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                variableWidth: false,
            }
        }, {
            breakpoint: 1700,
            settings: {
                arrows: true,
            }
        }, ]
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
        $(".modal-call_phone").mask("+7 (999) 999-99-99");
    });

    $('#modal').popup();
    $('.modal-thanks').popup();
    $('.modal-write').popup();
    $('.modal-call').popup();



});
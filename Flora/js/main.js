$(document).ready(function () {

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


    $(function () {
        $(".features-form_input").mask("+7 (999) 999-99-99");
    });


    /********  modal *******/
    // $(".modal").each(function () {
    //     $(this).wrap('<div class="overlay"></div>')
    // });

    // $(".open-modal").on('click', function (e) {
    //     e.preventDefault();
    //     e.stopImmediatePropagation;

    //     var $this = $(this),
    //         modal = $($this).data("modal");

    //     $(modal).parents(".overlay").addClass("open");
    //     setTimeout(function () {
    //         $(modal).addClass("open");
    //     }, 350);

    //     $(document).on('click', function (e) {
    //         var target = $(e.target);

    //         if ($(target).hasClass("overlay")) {
    //             $(target).find(".modal").each(function () {
    //                 $(this).removeClass("open");
    //             });
    //             setTimeout(function () {
    //                 $(target).removeClass("open");
    //             }, 350);
    //         }

    //     });

    // });

    // $(".close-modal").on('click', function (e) {
    //     e.preventDefault();
    //     e.stopImmediatePropagation;

    //     var $this = $(this),
    //         modal = $($this).data("modal");

    //     $(modal).removeClass("open");
    //     setTimeout(function () {
    //         $(modal).parents(".overlay").removeClass("open");
    //     }, 350);

    // });


});
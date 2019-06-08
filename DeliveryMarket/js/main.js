$(document).ready(function () {
    let flag = true;
    $('.markets-btn').click(function () {
        if (flag) {
            $('.card-dn').fadeIn();
            flag = false;
            $(this).text('Cвернуть');
        } else {
            $('.card-dn').fadeOut();
            flag = true;
            $(this).text('Показать больше');
        }
    });

    $('.reviews-review').slick({
        dots: false,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'ease',
        prevArrow: '<button type="button" class="reviews-leftBtn"></button>',
        nextArrow: '<button type="button" class="reviews-rightBtn"></button>'
    });

    /********* slow scroll*******/
    $(document).ready(function () {
        $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
            var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 500); // анимируем скроолинг к элементу scroll_el
            }
            return false; // выключаем стандартное действие
        });
    });
    /********** counter *************/
    // $(window).scroll(function () {
    //     $('.advantages-num').each(function () {
    //         cPos = $(this).offset().top,
    //             topWindow = $(window).scrollTop();
    //         if (cPos < topWindow) {
    //             $(this).prop('counter', 0).animate({
    //                 counter: $(this).text()
    //             }, {
    //                 duration: 1500,
    //                 easing: 'linear',
    //                 step: function (now) {
    //                     $(this).text(Math.floor(now));
    //                 },
    //             });
    //         }
    //     });
    // });


    let time = 2;
    let count = true;
    $(window).scroll(function () {
        $('.advantages-inner').each(function () {
            let cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();

            if (cPos - 500 < topWindow && count) {
                $('.advantages-num').each(function () {
                    let
                        i = 1,
                        num = $(this).data('num'),
                        step = 20,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.html(i);
                            } else {
                                clearInterval(int);
                                count = false;
                            }
                            i++;
                        }, step);
                });
            }
        });
    });

    /********  modal *******/
    $(".modal").each(function () {
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".open-modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).parents(".overlay").addClass("open");
        setTimeout(function () {
            $(modal).addClass("open");
        }, 350);

        $(document).on('click', function (e) {
            var target = $(e.target);

            if ($(target).hasClass("overlay")) {
                $(target).find(".modal").each(function () {
                    $(this).removeClass("open");
                });
                setTimeout(function () {
                    $(target).removeClass("open");
                }, 350);
            }

        });

    });

    $(".close-modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).removeClass("open");
        setTimeout(function () {
            $(modal).parents(".overlay").removeClass("open");
        }, 350);

    });


});

/************ Ripples water ***************/

$('.header').ripples({
    dropRadius: 40,
    perturbance: 0.01,
});
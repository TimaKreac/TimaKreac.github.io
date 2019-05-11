$(function () {
    $(document).ready(function () {
        $('.bird-1').toggleClass('bird-fly');
        $('.bird-2').toggleClass('bird-fly');
        $('.bird-3').toggleClass('bird-fly');
        $('.menu-link').toggleClass('menu-link-transform');
        $('.header-img').css('transform', 'scale(1)');
        $('.header-num span').css('transform', 'scale(1)');
        $('.header-img').css('opacity', '1');
        $('.nav-left-item').css('opacity', '1');
        $('.header-title').toggleClass('title-line header-title-animate');


    });
    // $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    //     var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    //     if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    //         $('html, body').animate({
    //             scrollTop: $(scroll_el).offset().top
    //         }, 500); // анимируем скроолинг к элементу scroll_el
    //     }
    //     console.log(scroll_el);

    //     return false; // выключаем стандартное действие
    // });

    (function () {
        const container = document.querySelector('body');
        const items = Array.from(container.querySelectorAll('.page'));
        let itemsNumber = items.length;
        let currentItemIndex = 0;
        let scroll = true;

        const moveSection = index => {
            let positionTop = (-index * 100) + 'vh';
            container.style.top = positionTop;
        };

        const setLocation = index => window.location = `#${items[index].id}`;

        // Set strart params
        container.style.top = 0;
        setLocation(currentItemIndex);
        itemsNumber--;

        // Scrolling sections by mouse/touchpad.
        window.addEventListener('wheel', event => {
            event.preventDefault();
            event.stopPropagation();

            let direction = event.deltaY;

            if (scroll) {
                if (direction > 0 && currentItemIndex < itemsNumber) {
                    currentItemIndex++;
                    scroll = false;
                } else if (direction < 0 && currentItemIndex !== 0) {
                    currentItemIndex--;
                    scroll = false;
                }
                moveSection(currentItemIndex);
            }

        });

        container.addEventListener('transitionend', () => {
            setTimeout(() => scroll = true, 100);
            setLocation(currentItemIndex);
        });

    })();
});
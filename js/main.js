$(function () {

        $('.bird-1').addClass('bird-fly');
        $('.bird-2').addClass('bird-fly');
        $('.bird-3').addClass('bird-fly');
        $('.menu-link').addClass('menu-link-transform');
        $('.header-img').css('transform', 'scale(1) rotate(0)');
        $('.header-num span').css('transform', 'scale(1)');
        $('.header-img').css('opacity', '1');
        $('.nav-left-item').css('opacity', '1');
        $('.header-title').addClass('title-line header-title-animate');


    $('.go1').click(function () {
        $('body').css('top', '0vh');
    });
    $('.go2').click(function () {
        $('body').css('top', '-100vh');
        $('body').addClass('secondvh');
    });

    $('.scroll-down').click(function () {
        $('body').css('top', '-100vh');
    });

    $('.go3').click(function () {
        $('body').css('top', '-200vh');
    });

    $('.go4').click(function () {
        $('body').css('top', '-300vh');
    });

    $('.go5').click(function () {
        $('body').css('top', '-400vh');
    });

    $('.scrollup').click(function () {
        $('body').css('top', '0vh');
    });

 	
 	if($("body").is(".secondvh")) {
 		alert('wq');
 	}
   
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

/* card transform */
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 15 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 15 + 'deg)';
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}


// var scrollvh = body[style="top: 0px;"];

// console.log(scrollvh);

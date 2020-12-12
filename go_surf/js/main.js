$(function () {
   const date = new Date();
   $('.header__aside-date').html(
      `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} <span>${
         date.getMonth() < 9
            ? '0' + (date.getMonth() + 1)
            : Number(date.getMonth()) + 1
      } | ${date.getFullYear()}</span>`
   );

   $('.header__slider').slick({
      infinite: true,
      fade: true,
      nextArrow:
         '<img class="slider-arrow slider-arrow__right" src="images/arrow-right.svg" alt="arrow-right"/>',
      prevArrow:
         '<img class="slider-arrow slider-arrow__left" src="images/arrow-left.svg" alt="arrow-left"/>',
      asNavFor: '.slider-dots',
   });

   $('.slider-dots').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.header__slider',
   });

   $('.surf-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow:
         '<img class="slider-arrow slider-arrow__right" src="images/arrow-right.svg" alt="arrow-right"/>',
      prevArrow:
         '<img class="slider-arrow slider-arrow__left" src="images/arrow-left.svg" alt="arrow-left"/>',
      asNavFor: '.surf-map',
      focusOnSelect: true,
   });

   $('.surf-map').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.surf-slider',
      focusOnSelect: true,
   });

   $('.holder__slider').slick({
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:
         '<img class="slider-arrow slider-arrow__right" src="images/arrow-right.svg" alt="arrow-right"/>',
      prevArrow:
         '<img class="slider-arrow slider-arrow__left" src="images/arrow-left.svg" alt="arrow-left"/>',
   });

   $(
      '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
   ).insertAfter('.quantity input');

   $('.quantity').each(function () {
      var spinner = $(this),
         input = spinner.find('input[type="number"]'),
         btnUp = spinner.find('.quantity-up'),
         btnDown = spinner.find('.quantity-down'),
         min = input.attr('min'),
         max = input.attr('max');

      let nightsPrice = $('.holder-item__info-item__sum').attr('data-nights');
      let guestsPrice = $('.holder-item__info-item__sum').attr('data-guests');
      let nights = $('.holder-nights').val();
      let guests = $('.holder-guests').val();
      $('.holder-item__info-item__sum').text(
         nightsPrice * nights + guestsPrice * guests
      );

      btnUp.click(function () {
         var oldValue = parseFloat(input.val());
         if (oldValue >= max) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue + 1;
         }
         spinner.find('input').val(newVal);
         spinner.find('input').trigger('change');
         let nightsPrice = $('.holder-item__info-item__sum').attr(
            'data-nights'
         );
         let guestsPrice = $('.holder-item__info-item__sum').attr(
            'data-guests'
         );
         let nights = $('.holder-nights').val();
         let guests = $('.holder-guests').val();
         $('.holder-item__info-item__sum').text(
            nightsPrice * nights + guestsPrice * guests
         );
      });

      btnDown.click(function () {
         var oldValue = parseFloat(input.val());
         if (oldValue <= min) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue - 1;
         }
         spinner.find('input').val(newVal);
         spinner.find('input').trigger('change');

         let nightsPrice = $('.holder-item__info-item__sum').attr(
            'data-nights'
         );
         let guestsPrice = $('.holder-item__info-item__sum').attr(
            'data-guests'
         );
         let nights = $('.holder-nights').val();
         let guests = $('.holder-guests').val();
         $('.holder-item__info-item__sum').text(
            nightsPrice * nights + guestsPrice * guests
         );
      });
   });
});

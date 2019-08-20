$(function () {
	$('.work-item').each(function (index) {
		setTimeout(function () {
			var myAnimation = new DrawFillSVG({
				elementId: "svg" + index
			});
			$(this).removeClass('').addClass('');
		}, 850 * index);
	});


	$('.header-menu_mobile').click(function () {
		$('.header-menu_mobile__item').toggleClass('on');
		$('.header-nav').slideToggle()
	});
	$('.c-hamburger').click(function () {
		$(this).toggleClass('active');
	});

	$('.feedback-items').slick({
		prevArrow: '<div class="feedback-prevArrow"></div>',
		nextArrow: '<div class="feedback-nextArrow"></div>',
		dots: true,
		dotsClass: 'feedback-dots'
	});

	$(".phone").mask("+7 (999) 999-99-99");
	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) {
		event.preventDefault();
	});

});
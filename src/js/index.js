$(document).ready(function () {
	$('.carusel__inner').slick({
		speed: 1200,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="../icons/left.png" alt="left arrow" /></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="../icons/right.png" alt="right arrow" /></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
				},
			},
		],
	});
});

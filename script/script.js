$('.item-menu__burger').on('click', function() {
	$('.item-menu__burger,.item-menu__link').toggleClass('active');
	$('body').toggleClass('lock');
});

$(window).on('scroll', function() {
	if($(window).scrollTop() >= 80) {
		$('.header').addClass('fixed-header');
	}
	else {
		$('.header').removeClass('fixed-header');
	}
});

$(document).ready(function() {
	$('.mainscreen__slider').slick({
		arrows: false,
		dots: true,
		speed: 1000,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3500,
	});
	$('.feature__slider').slick({
		arrows: true,
		dots: false,
		speed: 600,
		autoplay: true,
		autoplaySpeed: 1500,
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 5,
				}
			},{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
				}
			},{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.item-about__title-spoiler').on('click', function() {
		if($('.about__content').hasClass('spoilers')) {
			$('.item-about__title-spoiler').not($(this)).removeClass('active');
			$('.item-about__text-spoiler').not($(this).next()).slideUp(250);
		}
		$(this).toggleClass('active').next().slideToggle(250);
	});
	$('.item-tab__trigger').on('click', function() {
		var tabName = $(this).data('tab'),
			 tab = $('.tab__content[data-tab="'+tabName+'"]');

		$('.item-tab__trigger').removeClass('active');
		$(this).addClass('active');

		$('.tab__content').removeClass('active');
		tab.addClass('active');
	});
	$('.stuff__slider').slick({
		arrows: true,
		dots: false,
		slidesToScroll: 1,
		slidesToShow: 3,
		infinite: true,
		speed: 900,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 840,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	$('.stuff-popup').magnificPopup({
		type: 'image',
	});
	$('.feedback__slider').slick({
		arrows: true,
		dots: false,
		slidesToShow:1,
		slidesToScroll:1,
		speed: 1200,
	});
	$('.blog__popup').magnificPopup({
		type: 'image',
	});
	$('.blog__slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		slidesToScroll:1,
		speed:800,
		adaptivHeight:true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

$('a').on('click', function() {
	$('html,body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 700);
}); 
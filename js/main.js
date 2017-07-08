$(document).ready(function () {

	$('.team-acco__trigger').on('click', function (e) {
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.team-acco'),
			otherContent = container.find('.team-acco__content'),
			items = container.find('.team-acco__item'),
			item = $this.closest('.team-acco__item'),
			content = item.find('.team-acco__content'),
			reqHeight = item.find('.team-acco__content__wrap').outerHeight();

			console.log(item.find('.team-acco__content__wrap'));

		if (!item.hasClass('team-acco__item_active')) {
			items.removeClass('team-acco__item_active');
			item.addClass('team-acco__item_active');

			otherContent.css({
				'height' : 0
			});

			content.css({
				'height' : reqHeight
			});
		} else {
			item.removeClass('team-acco__item_active');

			content.css({
				'height' : 0
			});
		}
	});

	// Horizontal Acco
	$('.menu-acco__trigger').on('click', function (e) {
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.menu-acco'),
			otherContent = container.find('.menu-acco__content'),
			items = container.find('.menu-acco__item'),
			item = $this.closest('.menu-acco__item'),
			content = item.find('.menu-acco__content'),
			reqHeight = item.find('.menu-acco__content').outerHeight();

		if (!item.hasClass('menu-acco__item_active')) {
			items.removeClass('menu-acco__item_active');
			item.addClass('menu-acco__item_active');

			otherContent.css({
				'width' : 0
			});

			content.css({
				'width' : reqHeight
			});
		} else {
			item.removeClass('menu-acco__item_active');

			content.css({
				'width' : 0
			});
		}
	});

		// Bind click
		$(document).on('click', '.nav__item a', scrollPage);

		// Scroll
	function scrollPage(e){
		e.preventDefault();
		var href = $(this)[0].hash.replace('#', ''),
		offsetTop = $('*[data-section="' + href + '"]').offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1000);
	}

	// Fancybox
	$(function () {
		$('.review__view').fancybox({
			type : 'inline',
			maxWidth : 460,
			fitToView : false,
			padding : 0
		});

		$('.full-review__close').on('click', function(e){
			e.preventDefault();
			$.fancybox.close();
		});

	});



	$('.burger-slider').owlCarousel ({
	    items: 1,
		});

	// //Slider
	// $(document).ready(function(){
	// 	$(".owl-carousel").owlCarousel();
	// });


	// Map
	ymaps.ready(init);
	var myMap,
	myPlacemark;

	function init(){
		myMap = new ymaps.Map('ya-map', {
			center: [59.895968, 30.423115],
			zoom: 13
			// controls: []
		});

		myMap.behaviors.disable('scrollZoom');

		myPlacemark1 = new ymaps.Placemark([59.895968, 30.423115], {
			hintContent: 'Бургеры',
			balloonContent: 'Санкт-Петербург, ул.Бабушкина, д.12/1, 15'
			}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map-marker.svg',
			// Размеры метки.
			iconImageSize: [100, 75],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-50, -37]
		});

		myPlacemark2 = new ymaps.Placemark([59.906481, 30.320540], {
			hintContent: 'Бургеры',
			balloonContent: 'Санкт-Петербург, Московский проспект, 72'
			}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map-marker.svg',
			// Размеры метки.
			iconImageSize: [100, 75],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-50, -37]
		});

		myMap.geoObjects.add(myPlacemark1);
		myMap.geoObjects.add(myPlacemark2);
	};

	// Onepage Scroll
	$(".maincontent").onepage_scroll();

});

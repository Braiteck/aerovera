$(() => {
	// Галерея
	if ($('.gallery .swiper-container').length) {
		new Swiper('.gallery .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Отзывы
	if ($('.reviews .swiper-container').length) {
		new Swiper('.reviews .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			effect: 'fade',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// 40+ глобальных медицинских авиаперевозчиков
	if ($('.airlines .swiper-container').length) {
		new Swiper('.airlines .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 26,
					slidesPerView: 3
				}
			},
			on: {
				init: () => {
					setTimeout(() => {
						setHeight($('.airlines .swiper-container .company .name'))
					})
				},
				resize: () => {
					setTimeout(() => {
						$('.airlines .swiper-container .company .name').height('auto')
						setHeight($('.airlines .swiper-container .company .name'))
					})
				}
			}
		})
	}


	// Стоимость перевозки включает
	if ($('.cost_includes .swiper-container').length) {
		new Swiper('.cost_includes .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 26,
					slidesPerView: 3
				}
			}
		})
	}


	// Личный кабинет
	$('header .account .link').click(function (e) {
		e.preventDefault()

		$('header .account .dropdown').fadeIn(300)
		$('.overlay').fadeIn(300)
	})

	$('header .account .dropdown .close_btn, .overlay').click(function (e) {
		e.preventDefault()

		$('header .account .dropdown').fadeOut(200)

		if (!$('body').hasClass('menu_open')) {
			$('.overlay').fadeOut(200)
		}
	})


	// Личный кабинет - Адаптив
	$('.mob_header .account .user').click(function (e) {
		e.preventDefault()

		$('.mob_header .account .dropdown').fadeIn(300)
		$('.overlay').fadeIn(300)
	})

	$('.mob_header .account .dropdown .close_btn, .overlay').click(function (e) {
		e.preventDefault()

		$('.mob_header .account .dropdown').fadeOut(200)
		$('.overlay').fadeOut(200)
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.airlines .row').each(function () {
		airlinesHeight($(this), parseInt($(this).css('--airlines_count')))
	})

	$('.lk_info .lk_menu .row').each(function () {
		lkMenuHeight($(this), parseInt($(this).css('--lk_menu_count')))
	})
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	$('.airlines .row').each(function () {
		airlinesHeight($(this), parseInt($(this).css('--airlines_count')))
	})

	$('.lk_info .lk_menu .row').each(function () {
		lkMenuHeight($(this), parseInt($(this).css('--lk_menu_count')))
	})
})



// Выравнивание авиакомпаний
function airlinesHeight(context, step) {
	let start = 0,
		finish = step,
		$airlines = context.find('.company')

	$airlines.find('.name').height('auto')

	$airlines.each(function () {
		setHeight($airlines.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}

// Выравнивание в личном кабинете
function lkMenuHeight(context, step) {
	let start = 0,
		finish = step,
		$items = context.find('.item')

	$items.find('.name').height('auto')

	$items.each(function () {
		setHeight($items.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}
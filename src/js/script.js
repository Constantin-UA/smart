document.addEventListener('DOMContentLoaded', function (event) {
	// carusel add
	let myCarousel = document.querySelector('#carouselExampleControls');
	let carousel = new bootstrap.Carousel(myCarousel, {
		interval: false,
		ride: false,
	});

	// create item in catalog
	const catalogCont = document.querySelectorAll('.catalog__content');
	let catalogItem = document.createElement('div');
	catalogItem.className = 'catalog-item';
	catalogItem.innerHTML = `
		<div class="catalog-item__wrapper">
			<div class="catalog-item__content catalog-item__content_active">
				<img
					src="img/pulsometr.png"
					alt="pulsometr"
					class="catalog-item__img"
				/>
				<div class="catalog-item__subtitle">Пульсометр Polar GTX</div>
				<div class="catalog-item__descr">
					Для первых шагов в тренировках, основанных на сердечном ритме
				</div>
				<a href="#" class="catalog-item__link">ПОДРОБНЕЕ</a>
			</div>
			<div class="catalog-item__list">
				<ul class="catalog-item__more">
					<li class="catalog-item__more-content">
						Вы услышите звуковое оповещение о нужном пульсе во время
						тренировки;
					</li>
					<li class="catalog-item__more-content">
						Вы увидите информативный графический индикатор целевых
						тренировочных зон пульса;
					</li>
					<li class="catalog-item__more-content">
						Также Вы увидите информацию о расходе калорий за тренировку;
					</li>
					<li class="catalog-item__more-content">
						Вы сможете посмотреть данные по 10 тренировкам.
					</li>
				</ul>
				<a href="#" class="catalog-item__link">Назад</a>
			</div>
		</div>
		<hr />
		<div class="catalog-item__footer">
			<div class="catalog-item__prices">
				<div class="catalog-item__old-price">6 650 грн.</div>
				<div class="catalog-item__price">5 500 грн.</div>
			</div>
			<button class="button button_mini">купить</button>
		</div>	
`;

	// auto add item to catalog
	function addItems(n, numberCont) {
		for (let i = 0; i < n; i++) {
			catalogCont[numberCont].insertAdjacentElement(
				'beforeend',
				catalogItem.cloneNode(true)
			);
		}
	}
	addItems(5, 0);
	addItems(2, 1);
	addItems(1, 2);

	// add item card nav
	const itemLinkSwap = document.querySelectorAll('.catalog-item__link');
	const catIt = document.querySelectorAll('.catalog-item__content');
	const catLi = document.querySelectorAll('.catalog-item__list');

	itemLinkSwap.forEach((el, index) =>
		el.addEventListener('click', (event) => {
			event.preventDefault();
			if (index % 2 == 0) {
				let x = parseInt(index / 2);
				swapShow(x);
			} else {
				let x = parseInt(index / 2);
				swapShow(x);
			}
		})
	);

	function swapShow(idx) {
		catIt[idx].classList.toggle('catalog-item__content_active');
		catLi[idx].classList.toggle('catalog-item__list_active');
	}

	// tabs nav
	function tabsSwitch() {
		const li = document.querySelectorAll('.catalog__tab');
		const contentTab = document.querySelectorAll('.catalog__content');
		li.forEach((el, idx) => {
			el.addEventListener('click', () => {
				removeAddCl(li, 'catalog__tab_active', idx);
				removeAddCl(contentTab, 'catalog__content_active', idx);
			});
		});
	}
	function removeAddCl(name, cl, idx) {
		name.forEach((el) => {
			el.classList.remove(cl);
		});
		name[idx].classList.toggle(cl);
	}
	tabsSwitch();

	// Modal button
	/* const buttonConsul = document.querySelector('#btn_cons');
	const buttonConsulM = document.querySelector('.button_main');
	const btnSubmit = document.querySelectorAll('.button_submit');
	const btnBuy = document.querySelectorAll('.button_mini');
	const closeBtn = document.querySelectorAll('.modalMy__close');
	//modal
	const overlayMy = document.querySelector('.overlayMy');
	const modalConsultation = document.querySelector('#consultation');
	const modalOrder = document.querySelector('#order');
	const modalThx = document.querySelector('#thanks');
	//catalog item
	const catalogNameItem = document.querySelectorAll('.catalog-item__subtitle');

	//button open consult modal
	buttonConsul.addEventListener('click', () => {
		overlayMy.classList.add('modalShow');
		modalConsultation.classList.toggle('modalShow');
	});

	buttonConsulM.addEventListener('click', () => {
		overlayMy.classList.add('modalShow');
		modalConsultation.classList.toggle('modalShow');
	});

	//Submit
	btnSubmit.forEach((el) => {
		el.addEventListener('click', (event) => {
			overlayMy.classList.add('modalShow');
			modalThx.classList.toggle('modalShow');
			modalConsultation.classList.remove('modalShow');
			modalOrder.classList.remove('modalShow');
		});
	});
	//Buy
	btnBuy.forEach((el, idx) => {
		el.addEventListener('click', () => {
			modalOrder.childNodes[5].textContent = catalogNameItem[idx].textContent;
			overlayMy.classList.add('modalShow');
			modalOrder.classList.toggle('modalShow');
		});
	});
	//Exit
	closeBtn.forEach((el) => {
		el.addEventListener('click', () => {
			overlayMy.classList.remove('modalShow');
			modalConsultation.classList.remove('modalShow');
			modalOrder.classList.remove('modalShow');
			modalThx.classList.remove('modalShow');
		});
	}); */
	//jquery

	$('[data-modal=consultation]').on('click', function () {
		$('.overlayMy, #consultation').fadeIn('slow');
	});
	$('.modalMy__close').on('click', function () {
		$('.overlayMy, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modalMy__descr').text(
				$('.catalog-item__subtitle').eq(i).text()
			);
			$('.overlayMy, #order').fadeIn('slow');
		});
	});
	//form validate firs variable
	/* 	$('#consultation-form').validate(validateRules());
	$('#consultation form').validate(validateRules());
	$('#order form').validate(validateRules());
	function validateRules() {
		return {
			rules: {
				name: {
					required: true,
					minlength: 4,
				},
				phone: 'required',
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: {
					required: 'Введите свое имя',
					minlength: jQuery.validator.format(
						'Имя должно содержать {0} символов'
					),
				},
				phone: 'Введите телефон',
				email: {
					required: 'Введите email',
					email: 'Введите корректный email',
				},
			},
		};
	} */
	//validate form second
	validateForm('#consultation-form');
	validateForm('#consultation form');
	validateForm('#order form');
	function validateForm(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 4,
				},
				phone: 'required',
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: {
					required: 'Введите свое имя',
					minlength: jQuery.validator.format(
						'Имя должно содержать {0} символов'
					),
				},
				phone: 'Введите телефон',
				email: {
					required: 'Введите email',
					email: 'Введите корректный email',
				},
			},
		});
	}
	$('input[name=phone]').mask('+99(999)999-99-99');
});

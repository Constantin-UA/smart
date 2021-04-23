let myCarousel = document.querySelector('#carouselExampleControls');
let carousel = new bootstrap.Carousel(myCarousel, {
	interval: false,
	ride: false,
});
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
				<div class="catalog-item__subtitle">Пульсометр Polar FT1</div>
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
				<div class="catalog-item__old-price">4 750 грн.</div>
				<div class="catalog-item__price">4 500 грн.</div>
			</div>
			<button class="button button_mini">купить</button>
		</div>	
`;
function addItems(n, idx) {
	for (let i = 0; i < n; i++) {
		catalogCont[idx].insertAdjacentElement(
			'beforeend',
			catalogItem.cloneNode(true)
		);
	}
}
addItems(6, 0);
addItems(2, 1);
addItems(3, 2);

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

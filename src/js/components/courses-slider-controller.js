import {Controller} from 'stimulus';
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

export default class extends Controller {
	static targets = [
		'swiperContainer',
		'pagination',
		'buttonPrev',
		'buttonNext',
	];

	initialize() {
		this.swiper = new Swiper(this.swiperContainerTarget, {
			slidesPerView: 'auto',
			pagination: {
				el: this.paginationTarget,
				type: 'fraction',
				formatFractionCurrent: (number) => String(number).padStart(2, '0'),
				formatFractionTotal: (number) => String(number).padStart(2, '0'),
			},
			navigation: {
				prevEl: this.buttonPrevTarget,
				nextEl: this.buttonNextTarget,
			},
		});
	}
}

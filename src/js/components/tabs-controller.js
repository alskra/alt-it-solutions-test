import {Controller} from 'stimulus';

export default class extends Controller {
	static targets = ['navItem', 'frame'];

	initialize() {
		this.render.index();
	}

	doActive(evt) {
		this.index = $(evt.currentTarget).index();
	}

	get render() {
		return {
			index: () => {
				this.navItemTargets
					.forEach((item, index) => {
						$(item).toggleClass('is-active', index === this.index);
						$(this.frameTargets[index]).toggleClass('is-active', index === this.index);
					});
			},
		};
	}

	get index() {
		return JSON.parse(this.data.get('index'));
	}

	set index(val) {
		if (val !== this.index) {
			this.data.set('index', val);
			this.render.index();
		}
	}
}

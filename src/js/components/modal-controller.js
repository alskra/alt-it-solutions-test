import {Controller} from 'stimulus';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

document.addEventListener('click', (evt) => {
	const modalId = $(evt.target).closest('[data-modal-id]').data('modalId');

	if (modalId) {
		const targetModal = document.getElementById(modalId);

		if (targetModal) {
			evt.preventDefault();
			window.app.getControllerForElementAndIdentifier(targetModal, 'modal').open();
		}
	}
});

export default class extends Controller {
	initialized() {
		this.render.opened();
	}

	open() {
		this.opened = true;
	}

	close() {
		this.opened = false;
	}

	get render() {
		return {
			opened: () => {
				$(this.element).toggleClass('is-opened', this.opened);

				if (this.opened) {
					disableBodyScroll(this.element, {
						reserveScrollBarGap: true,
					});
				} else {
					enableBodyScroll(this.element);
				}
			},
		};
	}

	get opened() {
		return JSON.parse(this.data.get('opened'));
	}

	set opened(val) {
		if (val !== this.opened) {
			this.data.set('opened', val);
			this.render.opened();
		}
	}
}

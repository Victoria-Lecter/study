import alt from '../alt';

class FooterActions {
	constructor() {
		this.generateActions(
			'getTopCharacterSuccess',
			'getTopCharacterFail'
		);
	}

	getTopCharacters() {
		$.ajax({url: '/api/characters/top'})
			.done((data) => {
				this.actions.getTopCharacterSuccess(data)
			}).fail((jqXhr) => {
				this.actions.getTopCharacterFail(jqXhr)
			});
	}
}

export default alt.createActions(FooterActions);
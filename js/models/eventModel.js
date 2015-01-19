define(['backbone'], function () {
	var _Event = Backbone.Model.extend({
		defaults: {
			type: 'Semi-formal',
			name: 'Birdwatching',
			description: 'This event introduces the age old art of Birdwatching in a fashion never seen before. Experience the thrill, enthusiasm, and satisfaction you have been craving for without letting the Bird know.',
			dates: 'NITs have very little Birds. Please be patient.',
			special: 'Increases your vision. Very beneficial to the eyes. Just don\'t bring a parent along.'
		}
	});

	return _Event;
});
define(['backbone'], function (Backbone) {
	var _Night = Backbone.Model.extend({
		defaults: {
			name: 'Darknight',
			description: 'All nights are dark, but this is darker. We present you the first of its kind, the biggest event in the whole wide world, Darknight _[citation needed]_.',
			dates: 'Depends on the Lunar activity. We will notify you ASAP',
			special: 'You will get night-vision goggles for a charge of INR50.'
		}
	});

	return _Night;
});
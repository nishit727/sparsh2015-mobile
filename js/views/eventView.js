define(['backbone', 'tmpl', 'events'], function (Backbone, Tmpl, Events) {
	var _EventView = Backbone.View.extend({
		el: document.getElementById('events-container'),
		collection: Events,
		tmpl: document.getElementById('event-template').innerHTML,
		initialize: function () {
			this.render();
		},
		render: function () {
			Tmpl(tmpl, data);
		}
	});
});
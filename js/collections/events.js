define(['backbone', 'eventmodel', 'eventsdata'], function (Backbone, EventModel, EventsData) {
	var _Events = Backbone.Collection.extend({
		model: EventsModel
	});

	/*
	 * We read the JSON file for the events here and add them to the collection
	 * The JSON file forwards an array which we iterate over
	 */

	var _Data = [];

	for(var _i = 0, _len = EventsData.length; _i < _len; _i++) {
		_Data.push(new EventModel(EventsData[i]));
	}

	_Events.add(_Data);

	return _Events;
});
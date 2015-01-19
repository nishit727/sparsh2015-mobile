define(['backbone', 'nightmodel', 'nightsdata'], function (Backbone, NightModel, NightsData) {
	var _Nights = Backbone.Collection.extend({
		model: NightsModel
	});

	/*
	 * We read the JSON file for the events here and add them to the collection
	 * The JSON file forwards an array which we iterate over
	 */

	var _Data = [];

	for(var _i = 0, _len = NightsData.length; _i < _len; _i++) {
		_Data.push(new NightModel(NightsData[i]));
	}

	_Nights.add(_Data);

	return _Nights;
});
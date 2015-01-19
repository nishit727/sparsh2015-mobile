define([], function () {
	var _NavData = {};

	_NavData['length'] = 8;

	_NavData['hashes'] = [
		'events',
		'singing',
		'dancing',
		'fashion',
		'celeb',
		'social',
		'contacts',
		'ca'
	];

	_NavData['colors'] = [
		'#7e68b5', 
		'#0ed4c8', 
		'#eac05c', 
		'#ff6f6f', 
		'#80bc5d', 
		'#7e68b5', 
		'#0ed4c8', 
		'#eac05c'
	];

	// These should be changed according to the stripe's scale
	// We are designing for 480px height
	_NavData['height'] = 410 / 8; // 410 === 480 - 70
	_NavData['scale'] = _NavData['height'] / 90; // Each image is 90px high

	_NavData['positions'] = [
		[0, 0],		// Events
		[90, 0],	// Singing night
		[180, 0],	// Dancing night
		[270, 0],	// Fashion night
		[360, 0],	// Celebrity night
		[0, 90],	// Social causes
		[90, 90],	// Contact us
		[undefined, undefined]	// Campus Ambassador
	];

	return _NavData;
});
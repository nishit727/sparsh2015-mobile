define([], function () {
	/*
	 * Add data here. The default model defines these attributes for a contact
	 * name: The contact name
	 * designation: Who they are
	 * email
	 * tel: Phone number. Tapping over this will dial the number in a mobile
	 * year
	 * department
	 */

	var _Contacts = [{
		name: 'Dummy',
		designation: 'Awesomeness Head',
		email: 'dummy@example.com',
		tel: '+1234567890',
		year: '0th',
		department: 'Creativity'
	},
	{
		name: 'Dummy',
		designation: 'Awesomeness Head',
		email: 'dummy@example.com',
		tel: '+1234567890',
		year: '0th',
		department: 'Creativity'
	},
	{
		name: 'Dummy',
		designation: 'Awesomeness Head',
		email: 'dummy@example.com',
		tel: '+1234567890',
		year: '0th',
		department: 'Creativity'
	},
	{
		name: 'Dummy',
		designation: 'Awesomeness Head',
		email: 'dummy@example.com',
		tel: '+1234567890',
		year: '0th',
		department: 'Creativity'
	},
	{
		name: 'Dummy',
		designation: 'Awesomeness Head',
		email: 'dummy@example.com',
		tel: '+1234567890',
		year: '0th',
		department: 'Creativity'
	}];

	var scale = 80 /170;
	_Contacts['size'] = 1250 * scale+ 'px ' + 800 * scale + 'px';

	_Contacts['positions'] = [
		[-500, 0],
		[-680, 0],
		[-860, 0],
		[-500, -170],
		[-680, -170]
	];

	for(var _i = 0, _len = 5; _i < _len; _i++) {
		_Contacts['positions'][_i] = [_Contacts['positions'][_i][0] * scale,
									  _Contacts['positions'][_i][1] * scale];
	}

	return _Contacts;
});
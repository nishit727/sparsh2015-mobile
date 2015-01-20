/*
 * Setup everything here
 */

require.config({
	paths: {
		'backbone': 'exoskeleton.min',
		'tap': 'tap',
		'tmpl': 'microtemplatez'
	}
});

define('jquery', function () {});

define('underscore', ['backbone'], function (Backbone) {
	return Backbone.utils;
});

require(['tmpl',  'tap', 'data/navData', 'data/contactsData'], function (Tmpl, Tap, NavData, ContactsData) {

	// Make the $ function
	var $ = function (args) {
		// args is a string, either as id or as class
		if(args.substring(0,1) === '#')
			return document.getElementById(args.substring(1));
		else if(args.substring(0,1) === '.')
			return document.getElementsByClassName(args.substring(1));
		return null;
	}

	// Make the navigation panel
	;(function () {
		var nav = $('#navigation');
		var nav_template = $('#navigation-template').innerHTML;
		var html = '',
			scale = NavData['scale'];

		for(var _i = 0, _len = NavData['length']; _i < _len; _i++) {
			if(NavData['positions'][_i][0] !== undefined) {
				var style = 'background: url(\'assets/stripe.png\') no-repeat' 
						+ NavData['colors'][_i] + ';'
						+'background-size: '
						+ scale*1250 + 'px ' + scale*800 + 'px'
						+ ';background-position: -'
						+ NavData['positions'][_i][0]*scale +'px -' + NavData['positions'][_i][1] *scale + 'px';
				html += Tmpl(nav_template, {hash: NavData['hashes'][_i],
						style: style, text: ''});
			}
			else {
				html += Tmpl(nav_template, {hash: NavData['hashes'][_i],
						style: 'background: ' + NavData['colors'][_i], 
						text: 'CA'})
			}
		}

		nav.innerHTML = html;
	}());

	// And the contacts section
	;(function () {
		var contacts = $('#contacts');
		var contact_template = $('#contact-template').innerHTML;
		var html = '<div class="clearfill"></div>';

		for(var _i = 0, _len = 5; _i < _len; _i++) {
				html += Tmpl(contact_template, {
					dir: _i % 2 ? 'right' : 'left',
					style: 'background-size: ' + ContactsData['size'] + ';'
						   + 'background-position: '
						   + ContactsData['positions'][_i][0] + 'px '
						   + ContactsData['positions'][_i][1] + 'px',
					opposite: _i % 2 ? 'left' : 'right',
					name: ContactsData[_i]['name'],
					designation: ContactsData[_i]['designation'],
					tel: ContactsData[_i]['tel']
				});
		}

		contacts.innerHTML = html;

		console.log(html)
	}());

	// All event handlers here
	;(function () {
		var activeNav = -1;
		// Attach scroll event listener to window
		window.addEventListener('scroll', function () {
			if(window.scrollY > 250) {
				// Make the banner text appear
				$('#banner').className = 'show';
				// Give the fixed-top a box-shadow
				$('#fixed-top').style = 'box-shadow: 0 0 5px #111';
			}
			else {
				// Reversal
				$('#banner').className = 'hide';
				$('#fixed-top').style = '';
			}

			// .active(-ate) the proper navs
			var scrolled = Math.floor((window.scrollY - 409) / 480);
			// Check whether to waste computational power
			if(scrolled !== activeNav) {
				activeNav = scrolled;
				var list = $('.navigation-item');
				for(var _i = 0, _len = list.length; _i < _len; _i++) {
					if(_i === scrolled)
						list[_i].classList.add('active');
					else
						list[_i].classList.remove('active');
				}
			}
		});

		// Attach tap listeners to the Sparsh and Twitter logos and banner
		var tap0 = new Tap($('#logo')),
			tap1 = new Tap($('#tweet')),
			tap2 = new Tap($('#banner'));
		$('#logo').addEventListener('tap', function (e) {
			if($('#navigation').classList.contains('nav-shown'))
				$('#navigation').className = '';
			else
				$('#navigation').className = 'nav-shown';
			e.preventDefault();
		}, false);
		$('#tweet').addEventListener('tap', function () {
			window.open('https://twitter.com/intent/tweet?button_hashtag=sparsh2015', '_blank');
		}, false);
		$('#banner').addEventListener('tap', function (e) {
			window.scrollTo(0,0);
			e.preventDefault();
		}, false);

		// And to the reminder too
		var tap3 = new Tap($('#dismiss'));
		$('#dismiss').addEventListener('tap', function (e) {
			// Adding a class hide will not work :'(
			$('#remind').style.top = '-50px';
		});

		// For browsers which can be tricked (sadly Firefox on Firefox OS isn't)
		window.scrollTo(0,1);
	}());

});

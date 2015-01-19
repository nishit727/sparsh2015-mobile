define([], function () {
	/*
	 * Add data here. The default model defines these attributes for an event
	 * type: The event type which will be shown in a small text for navigation
	 * name: The event name
	 * description: The description of the event. Supports HTML tags.
	 *   For an example, a description can be
	 *
	 *     <h3>What?</h3>
	 *     <div>The hell</div>
	 *     <h3>Why></h3>
	 *     <div>
	 *       <ul>
	 *         <li>I don't know.</li>
	 *         <li>Seriously.</li>
	 *       </ul>
	 *     </div>
	 *
	 * dates: A string in whatever format you want
	 * special: Something else which is not in the above category. This is only rendered if present
	 */

	 var _Events = [{
	 	type: 'Dummy Type 1',
	 	name: 'Dummy Event 1',
	 	description: '<h1>This rocks!</h1>',
	 	dates: 'Undefined'
	 },
	 {
	 	type: 'Dummy Type 2',
	 	name: 'Dummy Event 2',
	 	description: '<h1>This sucks!</h1>',
	 	dates: 'Undefined'
	 }];

	 return _Events;
});
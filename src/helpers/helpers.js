var moment = require("moment");

module.exports.register = function(Handlebars, options) {
	'use strict';

	/**
	 * Get the first enabled item of a list..
	 * @param items An array of items.
	 * @return A subset of items.
	 */
	Handlebars.registerHelper('getLatestEntries', function(items, limit, options) {

		var rv = "";
		var count = 0;

		// Sort items by date
		var sortedItems = items.sort(function(a, b) {
			var momentA = moment(a.created);
			var momentB = moment(b.created);
			return momentB.diff(momentA);
		});

		if (!limit) {
			limit = 10;
		}

		// Pull out the most recent
		for (var i = 0; i < sortedItems.length && count++ < limit; i++) {
			if ("exclude" in sortedItems[i] && sortedItems[i].exclude === true) {
				continue;
			}
			rv += options.fn(sortedItems[i]);
			count++;
		}

		return rv;

	});

};

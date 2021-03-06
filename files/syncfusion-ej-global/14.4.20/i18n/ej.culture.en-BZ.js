ej.addCulture( "en-BZ", {
	name: "en-BZ",
    englishName: "English (Belize)",
	nativeName: "English (Belize)",
    language: 'en',
    isRTL: false,
	numberFormat: {
        pattern: ["-n"],
		decimals: 2,
        ',': ",",
        '.': ".",
        groupSizes: [3,0],
        '+': "+",
        '-': "-",
		percent: {
			pattern: ["-n%","n%"],
			decimals: 2,
            groupSizes: [3,0],
            ',': ",",
            '.': ".",
            symbol: '%'
		},
		currency: {
			pattern: ["-$n","$n"],
			decimals: 2,
            groupSizes: [3,0],
            ',': ",",
            '.': ".",
			symbol: "BZ$"
		}
	},
	calendars: {
		standard: {
			'/': '/',
	        ':': ':',
			firstDay: 1,
			days: {
	            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
	        },
	        months: {
	            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
	            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
	        },
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dddd, dd MMMM yyyy hh:mm tt",
				F: "dddd, dd MMMM yyyy hh:mm:ss tt",
				M: "d MMMM"
			}
		}
	}
});
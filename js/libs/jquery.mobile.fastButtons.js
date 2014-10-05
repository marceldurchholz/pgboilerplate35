// jquery.mobile.fastButtons.js
// Justin McCandless
// justinmccandless.com
// jQuery 1.6.4+
// jQuery Mobile 1.0.1+

// This jQuery Mobile plugin makes click events faster, especially iOS
// It does this by simply replacing 'click' events on document with 'vclick'

var fastButtons = {
	
	replace: function() {
		// copy the current click events on document
		// var clickEvents = jQuery.hasData( document ) && jQuery._data( document ).events.click;
		// clickEvents = jQuery.extend(true, {}, clickEvents);
		
		$( document ).find('a').each(function(e){
				$(this).off('click');
			if ($(this).attr('data-rel')==undefined && $(this).attr('rel')==undefined && $(this).attr('href')!=undefined) {
				console.log($(this)[0]);
				console.log($(this).click);
				var evnts = $(this).click;
				// $(this).off('click');
				for (var i in evnts) {
					console.log(evnts[i]);
					$(this).off('click',evnts[i].handler).on('vclick', evnts[i].handler);
				}
				// e.preventDefault();
				// return(false);
			}
		});
		
		// remove these click events
		// $(document).off('click');
	
		// reset them as vclick events
		/*
		for (var i in clickEvents) {
			console.log(clickEvents[i]);
			$(document).on('vclick', clickEvents[i].handler);
		}
		*/
	},
	
	replaceAttr: function() {
		// copy the current click events on document
		var clickElements = $( document ).find('a[href]').hide();
		clickElements = jQuery.extend(true, {}, clickElements);
		
		// remove these click events
		// $(document).off('click');
	
		// reset them as vclick events
		for (var i in clickElements) {
			console.log(clickElements[i]);
			// $(document).on('vclick', clickEvents[i].handler);
		}
	}

};

// Call fastbuttons and replace all click events with vclick
/*
$(document).ready(function() {
    fastButtons.replace();
});
*/
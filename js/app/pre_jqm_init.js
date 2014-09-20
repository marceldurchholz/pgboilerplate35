/*
 * Handle initialization before QJM is loaded
 */

//
// Do mobile initialization before jQuery Mobile is loaded.
//
$( document ).bind( "mobileinit", function() {
	// Make your jQuery Mobile framework configuration changes here!
	//console.log ('mobileinit')
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	
	if (isMobile.any()) {
		// change native things...
		// alert('mobile device');
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.show();
	} else  {
		// alert('desktop device');
	}

    $('textarea').unbind('focusout');
    $(document).on('focusout', 'textarea', function() {
        setTimeout(function() {
            window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
        }, 500);
    });
    $('textarea').unbind('focusin');
    $(document).on('focusin', 'textarea', function() {
        setTimeout(function() {
            window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
        }, 500);
    });
	
    $.mobile.jqmRouter={
    	firstMatchOnly: true
    };
});//mobileinit


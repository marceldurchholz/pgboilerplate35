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

	/* iOS */
    // $('textarea').unbind('focusout');
    $('textarea').unbind('blur');
	$("textarea").on('blur', 'textarea', function() {
		$(window).scrollTop(10);
		$(window).scrollTop(0);
		var footer = $("#footer_message");
		console.log(footer);
		footer.css({ "top": footer.position().top, "bottom": "auto"});
	});

    $('textarea').unbind('focusout');
    $(document).on('focusout', 'textarea', function() {
		$(window).scrollTop(10);
		$(window).scrollTop(0);
		var footer = $("#footer_message");

		footer.css({ "top": footer.position().top, "bottom": "auto"});
        setTimeout(function() {
            window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
			var footer = $("#footer_message");

			footer.css({ "top": footer.position().top, "bottom": "auto"});
        }, 500);
    });
    $('textarea').unbind('focusin');
    $(document).on('focusin', 'textarea', function() {
		$(window).scrollTop(10);
		$(window).scrollTop(0);
		var footer = $("#footer_message");

		footer.css({ "top": footer.position().top, "bottom": "auto"});
        setTimeout(function() {
            window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
			var footer = $("#footer_message");

			footer.css({ "top": footer.position().top, "bottom": "auto"});
        }, 500);
    });
	

    $.mobile.jqmRouter={
    	firstMatchOnly: true
    };
});//mobileinit


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
	
	document.addEventListener('deviceready', function () {
		//$(document.body).height(window.innerHeight);
		// document.body.height(window.innerHeight);
		//alert('a');
	}, false);
	
	if (isMobile.any()) {
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.show();
	} else  {
	}

	/* iOS */
    // $('textarea').unbind('focusin');
    $(document).on('focusin', 'textarea', function() {
		console.log('focusin');
        setTimeout(function() {
			console.log('focusin B');
			window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
			var footer = $(".textmsg");
			console.log(footer.position().top);
            footer.css({ "height":"120px", "position":"fixed","border":"5px solid red", "top":"auto", "bottom": "60px"});
        }, 1000);
		// $(window).scrollTop(0);
    });
	

    $.mobile.jqmRouter={
    	firstMatchOnly: true
    };
});//mobileinit


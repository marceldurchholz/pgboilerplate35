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

	// if(navigator.userAgent.indexOf("iPhone") > -1 )  {
		// $('input, textarea').on('focus', function (e) {
		$(document).on('focusin', 'textarea', function(e) {
			console.log('on focus');
			console.log(e);
			$('[data-role=header],[data-role=footer]').css('position', 'absolute');
		// }).on('blur', function (e) {
		}).on('blur', 'textarea', function(e) {
			console.log('on blur');
			console.log(e);
			$('[data-role=header],[data-role=footer]').css('position', 'fixed');
			//force page redraw to fix incorrectly positioned fixed elements
			setTimeout( function() {
				console.log('on blur settimeout');
				window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
			}, 20 );
		});
	// }
	
	/* iOS */
    /*
	// $('textarea').unbind('focusin');
    $(document).on('focusin', 'textarea', function() {
		console.log('focusin');
        setTimeout(function() {
			console.log('focusin B');
			window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
			var footer = $(".textmsg");
			// console.log(footer.position().top);
            footer.css({ "box-sizing":"border-box", "height":"80px", "position":"fixed","border":"1px solid red", "bottom": "0px", "max-height":"120px" });
        }, 500);
		// $(window).scrollTop(0);
    });
   $(document).on('focusout', 'textarea', function() {
		console.log('focusout');
        setTimeout(function() {
			console.log('focusout B');
			// window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
			var footer = $(".textmsg");
			// console.log(footer.position().top);
            // footer.css({ "box-sizing":"border-box", "height":"80px", "position":"fixed","border":"1px solid red", "top":"auto", "bottom": "0px"});
			footer.removeAttr('style');
        }, 500);
		// $(window).scrollTop(0);
    });
	*/
	

    $.mobile.jqmRouter={
    	firstMatchOnly: true
    };
});//mobileinit


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
			console.log($.mobile.window.scrollLeft());
			console.log($.mobile.window.scrollTop());
			// $(e.target).css({'position':'fixed !important','bottom':'0px !important','left':'0px !important','z-index':'9999 !important'});
			// $('#footer_message').toolbar( "refresh" );
			// var attrSave = $('#footer_message').attr('class');
			$('#footer_message').attr( "class_origin" , $('#footer_message').attr('class') ).removeAttr('class');
			// $('#footer_message').removeAttr('class');
			// console.log(attrSave);
			$('#footer_message').addClass('fixedfooter');
			// $('#footer_message').css({'position':'fixed !important','bottom':'0px !important','left':'0px !important','z-index':'9999 !important'});
			// $.mobile.silentScroll($('#header_message').offset().top);
			/*
			setTimeout( function() {
				console.log(e);
				$('#header_message').css({'position':'fixed !important','bottom':'0px !important','left':'0px !important','z-index':'9999 !important'});
				$(e.target).css({'position':'fixed !important','bottom':'0px !important','left':'0px !important','z-index':'9999 !important'});
				console.log('on focus B');
				// console.log($.mobile.window.scrollLeft());
				// console.log($.mobile.window.scrollTop());
				// $.mobile.silentScroll($('#header_message').offset().top);
			}, 1000 );
			*/
		// }).on('blur', function (e) {
		}).on('blur', 'textarea', function(e) {
			console.log('on blur');
			console.log(e);
			$('#footer_message').attr( "class" , $('#footer_message').attr('class_origin') ).removeAttr('class_origin');
			// $('#footer_message').toolbar( "refresh" );
			// $('[data-role=footer]').css('position', 'fixed');
			// $(e.target).css('position', 'fixed');
			// $(e.target).removeAttr('style');
			//force page redraw to fix incorrectly positioned fixed elements
			/*
			setTimeout( function() {
				console.log('on blur B');
				console.log($.mobile.window.scrollLeft());
				console.log($.mobile.window.scrollTop());
				window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
			}, 1000 );
			*/
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


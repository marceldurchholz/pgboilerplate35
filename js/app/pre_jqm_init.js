/*
 * Handle initialization before QJM is loaded
 */

//
// Do mobile initialization before jQuery Mobile is loaded.
//

function correctPageSize() {
	var ios_nws = iOS_normalGetWindowSize();
	var ios_ws = iOS_getWindowSize();
	var ios_vs = iOS_getViewportSize();
	var ios_ps = iOS_getPageSize();
	console.log(ios_ws);
	console.log(ios_vs);
	console.log(ios_ps);
}

window.deviceReadyDeferred = $.Deferred();
window.jqmReadyDeferred = $.Deferred();

function doWhenBothFrameworksLoaded() {
	alert('doWhenBothFrameworksLoaded');
	// TBD
}
$.when(window.deviceReadyDeferred, window.jqmReadyDeferred).then(doWhenBothFrameworksLoaded);

function keyboardWillShow(e) {
	console.log('keyboardWillShow');
}
function keyboardDidShow(e) {
	console.log('keyboardDidShow');
}
function keyboardWillHide(e) {
	console.log('keyboardWillHide');
}
function keyboardDidHide(e) {
	console.log('keyboardDidHide');
}

$( document ).bind( "mobileinit", function() {
	// Make your jQuery Mobile framework configuration changes here!
	//console.log ('mobileinit')
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;

	console.log(correctPageSize);
	
	document.addEventListener('deviceready', function () {
		//$(document.body).height(window.innerHeight);
		// document.body.height(window.innerHeight);
		//alert('a');
		window.deviceReadyDeferred.resolve();
	}, false);
	
	if (isMobile.any()) {
		alert('hurray... it is a mobile device');
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.show();
		
		$('body').off('keyboardWillShow').on('keyboardWillShow', keyboardWillShow);
		$('body').off('keyboardDidShow').on('keyboardDidShow', keyboardDidShow);
		$('body').off('keyboardWillHide').on('keyboardWillHide', keyboardWillHide);
		$('body').off('keyboardDidHide').on('keyboardDidHide', keyboardDidHide);
		
	} else  {
	}

	// $('input, textarea').on('focus', function (e) {
	$(document).on('afocusin', 'textarea', function(e) {
		// console.log('on focusin');
		// console.log(e);
		// console.log($.mobile.window.scrollLeft());
		// console.log($.mobile.window.scrollTop());
		// $.mobile.silentScroll($('#header_message').offset().top);
		// console.log($(document.body).html());
		// console.log($('#page_message').html());
		// $(e.target).css({'top':($(e.target).offset().top)+'px'});
		/*
		setTimeout( function() {
			console.log(e.target);
			console.log('setTimeout( function() {...');
			// console.log($('#header_message').offset().top);
			// $(e.target).css({'position':'fixed','bottom':'0px','left':'0px','z-index':'9999'});
			// $.mobile.silentScroll($('#header_message').offset().top);
			// console.log($(document.body).html());
			console.log($('#page_message').html());
		}, 1000 );
		*/
		// $(e.target).css({'position':'fixed !important','bottom':'0px !important','left':'0px !important','z-index':'9999 !important'});
		// $('#footer_message').toolbar( "refresh" );
		// var attrSave = $('#footer_message').attr('class');
		// $('#footer_message').attr( "class_origin" , $('#footer_message').attr('class') ).removeAttr('class');
		// $('#footer_message').removeAttr('class');
		// console.log(attrSave);
		// $('#footer_message').addClass('fixedfooter');
		// $('#footerTextarea').focus();
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
	}).on('ablur', 'textarea', function(e) {
		// console.log('on blur');
		// console.log(e);
		// $(e.target).removeAttr('style');
		// $('#footer_message').attr( "class" , $('#footer_message').attr('class_origin') ).removeAttr('class_origin');
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


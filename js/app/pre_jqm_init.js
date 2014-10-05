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

function isOpen_func(e) {
	console.log('isOpen_func');
	console.log(e);
}

function keyboardWillShow_func(e) {
	console.log('keyboardWillShow');
	console.log(e);
	var is_open = Keyboard.isOpen();
	console.log(is_open);
	var height = Keyboard.getHeight();
	console.log(height);
}
function keyboardDidShow_func(e) {
	console.log('keyboardDidShow');
	console.log(e);
	var is_open = Keyboard.isOpen();
	console.log(is_open);
	var height = Keyboard.getHeight();
	console.log(height);
	iOS_disableScrolling();
}
function keyboardWillHide_func(e) {
	console.log('keyboardWillHide');
	console.log(e);
	var is_open = Keyboard.isOpen();
	console.log(is_open);
	var height = Keyboard.getHeight();
	console.log(height);
}
function keyboardDidHide_func(e) {
	console.log('keyboardDidHide');
	console.log(e);
	var is_open = Keyboard.isOpen();
	console.log(is_open);
	var height = Keyboard.getHeight();
	console.log(height);
	iOS_enableScrolling();
}

// $(document).ready(function() {
$( document ).one( "pageinit", function() {
    fastButtons.replace();
});

/*
$( document ).bind( "pageshow", ".ui-page-active", function() {
	console.log("bind pageshow");
	// fastButtons.replace();
});
*/

$( document ).off( "mobileinit" ).on( "mobileinit", function() {
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
		// alert('hurray... it is a mobile device');
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.show();
		
		$('body').off('isOpen', isOpen_func).on('isOpen', isOpen_func);
		$('body').off('keyboardWillShow', keyboardWillShow_func).on('keyboardWillShow', keyboardWillShow_func);
		$('body').off('keyboardDidShow', keyboardDidShow_func).on('keyboardDidShow', keyboardDidShow_func);
		$('body').off('keyboardWillHide', keyboardWillHide_func).on('keyboardWillHide', keyboardWillHide_func);
		$('body').off('keyboardDidHide', keyboardDidHide_func).on('keyboardDidHide', keyboardDidHide_func);
		
	} else  {
		alert('oh oh, no mobile device');
	}
	
    $.mobile.jqmRouter={
    	firstMatchOnly: true
    };
});//mobileinit


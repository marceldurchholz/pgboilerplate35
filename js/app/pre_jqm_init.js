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
	console.log(e);
}
function keyboardDidShow(e) {
	console.log('keyboardDidShow');
	console.log(e);
	iOS_disableScrolling();
}
function keyboardWillHide(e) {
	console.log('keyboardWillHide');
	console.log(e);
}
function keyboardDidHide(e) {
	console.log('keyboardDidHide');
	console.log(e);
	iOS_enableScrolling();
}

$( document ).off("pageshow").on( "pageshow", function() {
	console.log("bind pageshow");
	// fastButtons.replace();
});

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
		alert('hurray... it is a mobile device');
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.show();
		
		$('body').off('keyboardWillShow').on('keyboardWillShow', keyboardWillShow);
		$('body').off('keyboardDidShow').on('keyboardDidShow', keyboardDidShow);
		$('body').off('keyboardWillHide').on('keyboardWillHide', keyboardWillHide);
		$('body').off('keyboardDidHide').on('keyboardDidHide', keyboardDidHide);
		
	} else  {
		alert('oh oh, no mobile device');
	}
	
    $.mobile.jqmRouter={
    	firstMatchOnly: true
    };
});//mobileinit


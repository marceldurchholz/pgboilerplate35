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
	console.log(ios_nws);
	console.log(ios_ws);
	console.log(ios_vs);
	console.log(ios_ps);
}

function hideActiveFooter() {
	// var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");
	// console.log(activePage);
	// var activePageId = $(activePage)[0].id;
	// console.log(activePageId);
	// $(activePage).find('#'+activePageId+'_footer').hide();
	// activePage.find('#'+activePageId+'_footer').hide();
	// footer_landing
	var footer = $('.ui-page-active').find('.ui-footer').css('visibility','hidden');
	// $(footer).css('visibility','hidden');
}
function showActiveFooter() {
	var footer = $('.ui-page-active').find('.ui-footer').css('visibility','visible');
}

window.deviceReadyDeferred = $.Deferred();
window.jqmReadyDeferred = $.Deferred();
function doWhenBothFrameworksLoaded() {
	// alert('doWhenBothFrameworksLoaded');
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
	hideActiveFooter();
}
function keyboardDidShow_func(e) {
	console.log('keyboardDidShow');
	console.log(e);
	var is_open = Keyboard.isOpen();
	console.log(is_open);
	var height = Keyboard.getHeight();
	console.log(height);
	correctPageSize();
	iOS_disableScrolling();
	correctPageSize();
}
function keyboardWillHide_func(e) {
	console.log('keyboardWillHide');
	console.log(e);
	var is_open = Keyboard.isOpen();
	console.log(is_open);
	var height = Keyboard.getHeight();
	console.log(height);
	showActiveFooter();
}
function keyboardDidHide_func(e) {
	console.log('keyboardDidHide');
	console.log(e);
	var is_open = Keyboard.isOpen();
	console.log(is_open);
	var height = Keyboard.getHeight();
	console.log(height);
	correctPageSize();
	iOS_enableScrolling();
	correctPageSize();
}

// $(document).ready(function() {
$( document ).on( "aaa_pageshow", function() {
	// fastButtons.replaceAttr();
});

$( document ).bind( "pageshow", ".ui-page-active", function() {
	console.log("bind pageshow");
	// hideActiveFooter();
	// showActiveFooter();
	correctPageSize();
    // fastButtons.replace();
	
	// var attachFastClick = require('fastclick');
	// attachFastClick(document.body);
});

window.addEventListener('load', function() {
    // FastClick.attach(document.body);
	var attachFastClick = require('fastclick');
	attachFastClick(document.body);
}, false);

$( document ).off( "mobileinit" ).on( "mobileinit", function() {
	// Make your jQuery Mobile framework configuration changes here!
	//console.log ('mobileinit')
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.activeBtnClass = "no_BtnSelector";
	
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


var JQMM = JQMM || {};

require.config({
	baseUrl: './js/',
	paths: {
		text: 				'libs/require-text-2.1.2',
		json:				'libs/require-json-0.3.0',
		// jquery: 			'libs/jquery-1.10.1.min',
		jquery: 			'libs/jquery-1.11.1.min',
		functions: 			'libs/functions',
		ios: 				'libs/ios.min',
		// fastclick: 			'libs/jQuery.fastClick',
		fastclick: 			'libs/fastclick',
		fastbutton: 		'libs/jquery.mobile.fastButtons',
		jqmrouter: 			'libs/jquery.mobile.router-0.9.3.min',
		// jqmobile: 			'libs/jquery.mobile-1.3.2.min',
		jqmobile: 			'libs/jquery.mobile-1.4.4.min',
		lodash: 			'libs/lodash-1.2.1.min',
		backbone: 			'libs/backbone-1.0.0.min',
		marionette: 		'libs/backbone.marionette-1.0.3.min',
		app_pre_jqm_init:	'app/pre_jqm_init',
		},
		
	shim: {	          
		jquery: {
			exports: '$'
		},
	    functions: {
	    	deps: ['jqmrouter' ]
	    },
	    ios: {
	    	deps: ['app_pre_jqm_init' ]
	    },
	    jqmrouter: {
	    	deps: ['app_pre_jqm_init' ]
	    },
	    fastclick: {
	    	deps: ['app_pre_jqm_init' ]
	    },
		fastbutton: {
			deps: ['jquery']
		},
	    app_pre_jqm_init: {
	    	deps: ['jquery' ]
	    },
	    jqmobile: {
	    	deps: ['app_pre_jqm_init', 'jqmrouter', 'jquery']
	    },
	    lodash: {
	    	exports: '_'
	    },
	    backbone: {
	    	deps: ['lodash', 'jquery'],
	        exports: 'Backbone'
	    },
	    marionette: {
	    	deps: ['backbone'],
	        exports: 'Marionette'
	    }
	}
});


//must load 'functions' at the very beginning
define(['functions'], 
	function (functions) {
		require(['jquery', 'app_pre_jqm_init', 'ios', 'fastclick', 'fastbutton', 'jqmrouter', 'jqmobile', 'lodash', 'backbone', 'marionette'], 
			function () {
				window.jqmReadyDeferred.resolve();
				// eventually... build in here a timeout for native device check (both deferred via "then")
				require(['app/app', 'app/routing', 'app/page_landing', 'app/page_about', 'app/page_videos', 'app/page_message', 'app/page_login', 'app/helper'], 
					function () {
						$(function () {
							JQMM.App.start();
						});
					}
				);
				return JQMM ;
			}
		);
	}
);


/*
 * loadCss
 */

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

/*
// loadCss ('js/libs/jquery.mobile-1.3.2.min.css');
loadCss ('js/libs/my-custom-theme.min.css');
loadCss ('js/libs/jquery.mobile.icons.min.css');
loadCss ('js/libs/jquery.mobile.structure-1.4.4.min.css');
loadCss ('js/libs/layouthacks.css');
*/
cssArray = [
    "js/libs/my-custom-theme.min.css",
	"js/libs/jquery.mobile.icons.min.css",
	"js/libs/jquery.mobile.structure-1.4.4.min.css",
	"js/libs/layouthacks.css"
];
cssArray.forEach(loadCss)

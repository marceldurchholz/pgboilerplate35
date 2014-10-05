define(['app/app', 'app/helper', 'text!../../templates/app/content.videos.html'],
function (App, Helper, contentTmpl){

	App.Page_Videos = (function(){
		var Page_Videos = {};
		
		var _pageName = 'videos';		
		var _pageLayout = Helper.newPageLayout({
			name:_pageName,
			panelView: 		Helper.newPanelView({name:_pageName}),			
			headerView: 	Helper.newHeaderView({name:_pageName, title:'Welcome to the Videos Page'}),
			contentView: 	Helper.newContentView({name:_pageName, template: _.template(contentTmpl, {}) }),
			footerView: 	Helper.newFooterView({name:_pageName, title:'Videos Footer'})
		});
							
		App.addInitializer(function(options){
			App.vent.trigger("page:videos:started");
		});
	
		  return Page_Videos;
	})();

	return App.Page_Videos;
});

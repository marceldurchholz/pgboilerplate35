define(['app/app', 'app/helper', 'text!../../templates/app/content.message.html', 'text!../../templates/app/header.message.html', 'text!../../templates/app/footer.message.html'],
function (App, Helper, contentTmpl, headerTmpl, footerTmpl){

	App.Page_Message = (function(){
		var Page_Message = {};
		
		var _pageName = 'message';		
		var _pageLayout = Helper.newPageLayout({
			name:_pageName,
			panelView: 		Helper.newPanelView({name:_pageName}),			
			headerView: 	Helper.newHeaderView({name:_pageName, template: _.template(headerTmpl, {}) }),
			contentView: 	Helper.newContentView({name:_pageName, template: _.template(contentTmpl, {}) }),
			// footerView: 	Helper.newFooterView({name:_pageName, template: _.template(footerTmpl, {}) }),
		});
							
		App.addInitializer(function(options){
			App.vent.trigger("page:message:started");
		});
	
		  return Page_Message;
	})();

	return App.Page_Message;
});

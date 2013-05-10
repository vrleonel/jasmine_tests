/**
 * Script Name
 */

if(!window.titans){ var titans = {pages:{}}; }
if(!titans.pages){ titans.pages = {}; }

(function(scope, $){

	var ValidUrl = function(passedUrl){
		var _self = this;
		var url = passedUrl;

		this.getUrl = function(){
			url_splited = url.split(":")[0];
			console.log(url_splited != "http");

			if(( url_splited !== "http") && (url_splited !== "https")){
				return false;
			}else{
				return url;
			}
		}

	};

	scope.ValidUrl = ValidUrl;

})(titans.pages, jQuery);
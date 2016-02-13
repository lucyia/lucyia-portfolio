(function(window, document, undefined){
	$(document).ready(function(){		
		if ($("#index-navbar").prop("disabled")) {
			$("#index-toggle").on("click", function(){
				$("#index-navbar").fadeOut("slow").animate({"left": "-70%" }, {duration: "slow", queue: false}, function() {/*done*/});
				$("#index-navbar").prop("disabled", true);
			});
		} else {
			$("#index-toggle").on("click", function(){
				$("#index-navbar").fadeIn("slow").animate({"left": "70%" }, {duration: "slow", queue: false}, function() {/*done*/});
				$("#index-navbar").prop("disabled", false);
			});
		}
	});	
})(this, document);
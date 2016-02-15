(function(window, document, undefined){
	$(document).ready(function(){
		// toggle button for showing/hiding navigation in index
		$("#index-toggle").on("click", function(){
			if ($("#index-navbar").is(":visible")) {
				$("#index-navbar").fadeToggle("slow").animate({"left": "70%" }, {duration: "slow", queue: false}, function() {/*done*/});
			} else {				
				$("#index-navbar").fadeToggle("slow").animate({"left": "0%" }, {duration: "slow", queue: false}, function() {/*done*/});				
			}
		});
	});	
})(this, document);
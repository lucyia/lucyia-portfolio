(function(window, document, undefined){
	$(document).ready(function(){

		// toggle button for showing/hiding navigation in index
		$("#index-toggle").on("click", function(){
			if ($("#index-navbar").is(":visible")) {
				$("#index-navbar").fadeToggle("slow").animate({"left": "70%" }, {duration: "slow", queue: false}, function() {/*done*/});
			} else {				
				$("#index-navbar").fadeToggle("slow").animate({"left": "70px" }, {duration: "slow", queue: false}, function() {/*done*/});				
			}
		});

		// colorbox image gallery
		jQuery('a.gallery').colorbox({
			maxWidth:'90%', 
			maxHeight:'90%', 
			opacity:0.5 , 
			rel:'group1',
			transition:	"elastic"
		});

	});
})(this, document);
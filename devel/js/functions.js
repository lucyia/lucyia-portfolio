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
			maxWidth:'95%', 
			maxHeight:'95%', 
			opacity:0.75, 
			rel:'group1',
			transition:	"elastic"
		});

		// key listeners for sliders on project pages
		$(document).keydown(function(e){
			if (e.keyCode == 37) {
				// left arrow pressed
				window.location.href = getNewLocation('previous');
			} else if (e.keyCode == 39) {
				// right arrow pressed
				window.location.href = getNewLocation('next');
			}
		});
	});

	function getNewLocation(page) {
		return $('.slider-'+page+'>a').attr('href');
	}
})(this, document);
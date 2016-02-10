/**
 * Generates elements defined by path on SVG with hovering effect
 * The element looks something like this:
 *   ----
 *  /    \
 *  \    /
 *   \  /
 *    --
 * 
 * @author lucyia github.com/lucyia
 */

(function(window, document, undefined){

	$(document).ready(function(){

		// minus 2px for save values of width/height without scrollbars
		var canvasWidth = $(window).width() - 2;
		var canvasHeight = $(window).height() - 2;
		
		// create svg panel over the whole viewport
		var svg = d3.select('body')
					.append('svg')
					.attr('width', canvasWidth)
					.attr('height', canvasHeight);

		// one unit size
		var u = 25;

		// create elements where i is one diagonal line and j is one element in line
		// number of elements is not precise so there is save overlap without missing border elements
		for (var i=0; i<canvasHeight/(u*4)*4; i++) {
			for (var j=0; j<canvasWidth/(u*4)*4; j++) {

				// set strating point which is outside of canvas
				var sPointX = -canvasWidth*2 + 4*u*i + 5*u*j;
				var sPointY = (1.75)*u + 3.5*u*i - 1.75*u*j;

				//create the element
				svg.append('path')
					.attr('d', function(){
						return	 ' M ' + (sPointX)		 +' '+ (sPointY)
								+' L ' + (sPointX + 1*u) +' '+ (sPointY - 1.75*u) 
								+' L ' + (sPointX + 5*u) +' '+ (sPointY - 1.75*u) 
								+' L ' + (sPointX + 6*u) +' '+ (sPointY) 
								+' L ' + (sPointX + 4*u) +' '+ (sPointY + 3.5*u)
								+' L ' + (sPointX + 2*u) +' '+ (sPointY + 3.5*u)
								+' L ' + (sPointX)       +' '+ (sPointY)
								+' z'
					})
					.attr('fill', 'black')
					.style('opacity', 0.8)
					.on('mouseover', function(){
						d3.select(this)					
							.transition()
							.style('opacity', 0)
							.duration(500);
					})
					.on('mouseout', function(){
						d3.select(this)					
							.transition()
							.style('opacity', 0.8)
							.duration(500);
					});
			}
		}		

	});
	
})(this, document);
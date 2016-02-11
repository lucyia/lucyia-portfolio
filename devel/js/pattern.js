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
		var canvasWidth = $(window).width() - 10;
		var canvasHeight = $(window).height() - 10;
		
		// create svg panel over the whole viewport
		var svg = d3.select('body')
					.append('svg')
					.attr('width', canvasWidth)
					.attr('height', canvasHeight);

		// one unit size
		var u = 25;

		// create elements where i is one diagonal line and j is one element in line
		// generating more elements and then checking whether it overlaps with canvas
		// so there is save overlap without missing border elements
		for (var i=0; i<Math.max(canvasWidth, canvasHeight)/(u*4)*5; i++) {
			for (var j=0; j<Math.max(canvasHeight, canvasWidth)/(u*4)*5; j++) {

				// set strating point which is outside of canvas
				var sPointX = -canvasWidth*5 + 4*u*i + 5*u*j;
				var sPointY = (1.75)*u + 3.5*u*i - 1.75*u*j;				

				// if the element ovelaps canvas, then append it, otherwise ignore
				if (elementInCanvas(sPointX, sPointY)) {
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
						.attr('stroke', '#111111')
						.attr('stoke-width', 1)
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
		}

		// element is overlapping canvas if at least one of its point is in canvas
		function elementInCanvas(x, y) {			
			return (pointInCanvas(x, y) || pointInCanvas(x+1*u, y-1.75*u) || pointInCanvas(x+5*u, y-1.75*u) || pointInCanvas(x+6*u, y) || pointInCanvas(x+4*u, y+3.5*u) || pointInCanvas(x+2*u, y+3.5*u));

			function pointInCanvas(x, y){				
				return (x>0 && x<canvasWidth && y>0 && y<canvasHeight);
			}
		}		

	});
	
})(this, document);
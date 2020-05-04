jQuery(document).ready( function($) {
							
		// start tooltips

		$(".marker").ezpz_tooltip({
			stayOnContent:'false'
		});
		
		$(".marker").click(function(){
			$(".tooltips").fadeIn('slow');
			return false;
			}
		);
		
		//clean up to display better when js is disabled
		$(".slider").css({'z-index':'2000'});
		$("#map_markers").css({'display':'block'});
		$(".map_tagline").css({'display':'block'});
		
		$(".tooltips .map_tootip").addClass('map_content');
		$(".tooltips div .tooltip_bottom").css({'display':'block'});
		$(".tooltips div .tooltip_top").addClass('bg');
		$(".tooltips div .tooltip_close_btn").css({'display':'block'});
		
		$(".tooltip_close_btn").click(function () {
			$(".tooltips").fadeOut('slow');
			return false;
		});
		
		//zoom switch functions
		var map_start = $('#map').html();
		var map50 = '<img id="map50" src="/images/map/map_zoom_50.jpg" width="1662" height="884" alt="" class="hidden" />';
		var map100 = '<img id="map100" src="/images/map/map_zoom_100.jpg" width="3324" height="1768" alt="" class="hidden" />';
	
		function level0() {
			$('#map').html(map_start);
			$('#map0').addClass("hidden");
			$('#map0').animate({opacity: 'show'}, {duration: 800, easing: 'linear' });
			$('#map_markers').removeClass();
			$('#map_markers').addClass('map0');
			//set marker positions
			$('#map_markers').css("left",0);
			$('#map_markers').css("top",0);
		}
		
		function level50() {
			$('#map').html(map50);
			$('#map50').animate({opacity: 'show'}, {duration: 800, easing: 'linear' });
			$('#map_markers').removeClass();
			$('#map_markers').addClass('map50');
			$("#map img").imagetool({
				viewportWidth: 928
			   ,viewportHeight: 342
			   ,topX: 631
			   ,topY: 442
			   ,bottomX: 1559
			   ,bottomY: 784
			   ,callback: function(topX, topY, bottomX, bottomY) {     
				 $("input.values").val("(" + topX + "," + topY + ")" + "(" + bottomX + "," + bottomY + ")");
				},loading: "/images/map/load.gif"
			});
			//set marker positions
			$('#map_markers').css("left",-631);
			$('#map_markers').css("top",-442);
		}
		
		function level100() {
			$('#map').html(map100);
			$('#map100').animate({opacity: 'show'}, {duration: 800, easing: 'linear' });
			$('#map_markers').removeClass();
			$('#map_markers').addClass('map100');
			$("#map img").imagetool({
			   maxWidth :3600
			   ,viewportWidth: 928
			   ,viewportHeight: 342
			   ,topX: 1200
			   ,topY: 1200
			   ,bottomX: 2228
			   ,bottomY: 1542
			   ,callback: function(topX, topY, bottomX, bottomY) {     
				 $("input.values").val("(" + topX + "," + topY + ")" + "(" + bottomX + "," + bottomY + ")");
				},loading: "/images/map/load.gif"
			});
			//set marker positions
			$('#map_markers').css("left",-1085.27);
			$('#map_markers').css("top",-1200);
		}
		
		//start slider
		var zoomLevel = 0;
	
		$("#slider-vertical").slider({
			orientation: "vertical",
			range: "min",
			startValue:zoomLevel,
			min: 0,
			max: 100,
			value: 0,
			slide: function(event, ui) {
				if (ui.value == 0) {
					level0();
				} else if (ui.value <=50) {
					level50();
				} else if (ui.value <=100) {
					level100();
				}
			}
		});
	
		$("a.plus").click(function(){
			$(".tooltips").fadeOut('slow');
			var val = $("#slider-vertical").slider("option", "value");
			if (val == 0) {
				$('#slider-vertical').slider("option", "value", 50); 
				level50();
			} else if (val <=50) {
				$('#slider-vertical').slider("option", "value", 100);
				level100();
			} else if (val <=100) {
				$('#slider-vertical').slider("option", "value", 100);
				level100();
			}
			return false;
		});
	
		$("a.minus").click(function(){
			$(".tooltips").fadeOut('slow');
			var val = $("#slider-vertical").slider("option", "value");
			if (val == 0) {
				$('#slider-vertical').slider("option", "value", 0); 
				level0();
			} else if (val <=50) {
				$('#slider-vertical').slider("option", "value", 0);
				level0();
			} else if (val <=100) {
				$('#slider-vertical').slider("option", "value", 50);
				level50();
			}
			return false;
		});
		
		
		
});
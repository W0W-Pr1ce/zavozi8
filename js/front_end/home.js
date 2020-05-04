jQuery(document).ready( function($) {
	
	initHomeBlurb($);
							
	function initHomeBlurb($) {
			//hide hotels strapline
			$('.hotels_blurb .hotel_strapline').css({'display':'none'});
			//add overlay
			$(".hotels_blurb li dl a").prepend("<span class='overlay' style='display:none'></span>");
			
			//get all straplines
			var hotels = $('.strapline').html();
			var strapline = $('.strapline');
			var overlay = $(".hotels_blurb .overlay");
			
			$(".hotels_blurb li").hover(function () {
				overlay.css({'display':'block'});
				$(this).find(".overlay").css({'display':'none'});
				$(this).addClass("active");
				var swap = $(this).find(".hotel_strapline").html();
				strapline.html(swap);
			});
			
			$(".col_thick_right").mouseleave(function () {									  	
				strapline.html(hotels);
				overlay.css({'display':'none'});
			});
	}
});
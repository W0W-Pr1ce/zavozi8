jQuery(document).ready( function($) {				 
	hideShow('#btn_switch','#switch_area');
	hideShow1('#btn_switch1','#switch_area1');
});

function hideShow(hideShowBtn, hideShowArea) {
	jQuery(hideShowArea).css({'display':'none'});
	jQuery(hideShowBtn).css({'display':'block'});
	jQuery(hideShowBtn).click(function(){
		jQuery(hideShowArea).animate({ height: 'toggle' }, "slow");
		jQuery('#open').animate({ opacity: 'toggle' }, "slow");
		jQuery('#close').animate({ opacity: 'toggle' }, "slow");
		jQuery('.arrow.up').animate({ opacity: 'toggle' }, "slow");
		jQuery('.arrow.down').animate({ opacity: 'toggle' }, "slow");
		var dynamic_header = jQuery('.dynamic_header');
		if (dynamic_header.length != 0) {
			jQuery(dynamic_header).animate({ opacity: 'toggle' }, "slow");
		}
		return false;
	});
}

function hideShow1(hideShowBtn, hideShowArea) {
	jQuery(hideShowArea).css({'display':'none'});
	jQuery(hideShowBtn).css({'display':'block'});
	jQuery(hideShowBtn).click(function(){
		jQuery(hideShowArea).animate({ height: 'toggle' }, "slow");
		jQuery('#open1').animate({ opacity: 'toggle' }, "slow");
		jQuery('#close1').animate({ opacity: 'toggle' }, "slow");
		jQuery('.arrow.up').animate({ opacity: 'toggle' }, "slow");
		jQuery('.arrow.down').animate({ opacity: 'toggle' }, "slow");
		var dynamic_header = jQuery('.dynamic_header');
		if (dynamic_header.length != 0) {
			jQuery(dynamic_header).animate({ opacity: 'toggle' }, "slow");
		}
		return false;
	});
}
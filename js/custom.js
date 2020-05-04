jQuery(document).ready(function(){
	var altText;
	jQuery("img").each(function() {
		var img = jQuery(this);
		if (!img.attr("alt") || img.attr("alt") == "" || img.attr("alt") == "#") {
			altText = img.attr('src').filename(); 
			altText = altText.replace(/-/g, " ");
			img.attr("alt", altText);
		}
	});
	
	jQuery("#exelatorTagScript").attr("alt", '');
});

String.prototype.filename=function(extension){
    var s= this.replace(/\\/g, '/');
    s= s.substring(s.lastIndexOf('/')+ 1);
    return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
}

if(readCookie('group_4') == 'true') {
	jQuery("#exelatorTagScript").attr("src", 'https://loadus.exelator.com/load/?p=1083&g=74&action=cs&j=0');
}

// Read cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

jQuery(document).ready(function(){
	jQuery( "#info_bar_top .info_bar_close" ).click(function() {
		jQuery( "#info_bar_top" ).fadeOut( "500" );
	});
});
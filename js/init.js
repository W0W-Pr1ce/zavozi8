ct_$('html').ultimateGDPR({
    popup_style: {
        position: 'bottom-panel', // bottom-left, bottom-right, bottom-panel, top-left, top-right, top-panel
        distance: '20px', // distance betwen popup and window border
        box_style: 'classic', // classic, modern
        box_shape: 'rounded', // rounded, squared
        background_color: '#fff584', // color in hex
        text_color: '#542d04', // color in hex
        button_shape: 'rounded', // squared, rounded
        button_color: '#e1e1e1', // color in hex
        button_size: 'normal', // normal, large
        box_skin: 'skin-dark-theme', // skin-default-theme, skin-dark-theme, skin-light-theme
        gear_icon_position: 'bottom-left', // top-left, top-center, top-right, center-left, center-right, bottom-left, bottom-center, bottom-right
        gear_icon_color: '#6a8ee7', //color in hex
    },
    popup_options: {
        parent_container: 'body', // append plugin html to this element selector
        always_show: false, // true, false, when true popup is displayed always even when consent is given
        gear_display: true, // true, false when true displays icon with cookie settings
        popup_title: 'Use of Cookies and Other Technologies', // title for popup
        popup_text: 'We use Cookies to improve your experience while navigating on the website. The use of cookies aims to remember choices you make, to deliver advertisements more relevant to you and your interest and improve the functionality of the website. You can select your cookies preferences, accept and continue or reject the use of the non-essential cookies. For more information on the use of Cookies read our <a href="https://www.sani-resort.com/en_GB/cookies-policy" class="cookies_policy_popup" onClick=\'_gaq.push(["_trackEvent", "Newsletter", "Click", "Newsletter Link"]);\' >Cookies Policy</a>.', // text for popup
        accept_button_text: 'Accept and Continue', // string, text for accept button
        read_button_text: 'Read More', // string, text for read more button
        read_more_link: '/cookies-policy/', // string, link to the Read More page
        advenced_button_text: 'Manage Cookies', // string, text for advenced button
        reject_button_text: 'Reject', // string, text for accept button
        grouped_popup: true, // true, false, when true cookies are grouped
        default_group: 'group_1', // string: name, select group that will be selected by default
        content_before_slider: '',//'<h2>Privacy settings</h2><div class="ct-ultimate-gdpr-cookie-modal-desc"><p>Decide which cookies you want to allow.</p><p>You can change these settings at any time. However, this can result in some functions no longer being available. For information on deleting the cookies, please consult your browser’s help function.</p> <span><a href="/cookies-policy/" >Learn more about the cookies we use.</a></span></div><h3>With the slider, you can enable or disable different types of cookies:</h3>',
        // string: this content will be displayed before cookies slider, html tags alowed
        accepted_text: 'This website will:',
        declined_text: "This website won't:",
        save_btn: 'Save & Close', // string, text for modal close btn
        prevent_cookies_on_document_write: false, // prevent cookies on document write when there is no agreement for cookies
        check_country: false,
        countries_prefixes: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'],
        cookies_expire_time: 30, // set number of days, you can use 0 for session only or 'unlimited'
        cookies_path: '/', // sets custom path use / for global, '/your_path' for custom path or 'current' for current path
        reset_link_selector: '.ct-uGdpr-reset',
        first_party_cookies_whitelist: [],
        third_party_cookies_whitelist: [],
        cookies_groups_design: 'skin-2', // skin-1, skin-2, skin-3
        assets_path : '/', // absolute path to directory with assets
        cookies_groups: {
            group_1: {
                name: 'Essential', // string: name
                enable: true, // true, false, you can disable this group by using false
                icon: 'fas fa-check', // string icon class from font-awesome see -> http://fontawesome.io
                list: ['These cookies are essential in order to enable you to move around the website and use its features, such as accessing secure areas of the website. Without these cookies, services you have asked for, cannot be provided.'],
                blocked_url: ['www.sani-resort.com', 'sani-resort.com'], // array list of url blocked scripts
                local_cookies_name: ['CookieConsent', 'symfony'], // array, list of local cookies names
                local_cookies_type: ['HTTP', 'HTTP', 'HTTP'], // array, list of local cookies names
                local_cookies_duration: ['Session', '1 year', 'Session'], // array, list of local cookies names
                local_cookies_description: ["Used to distribute traffic to the website on several servers in order to optimise response times.", "Stores the user's cookie consent state for the current domain"], // array, list of local cookies names
            },
            group_2: {
                name: 'Functionality', // string: name
                enable: true, // true, false, you can disable this group by using false
                icon: 'fas fa-cog', // string icon class from font-awesome see -> http://fontawesome.io
                list: ['These cookies allow the website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features.'],
                blocked_url: ['brandcoreanalytics.azurewebsites.net'], // array list of url blocked scripts
                local_cookies_name: ['ARRAffinity'], // array, list of local cookies names
				local_cookies_type: ['HTTP'], // array, list of local cookies names
                local_cookies_duration: ['Session'], // array, list of local cookies names
                local_cookies_description: [""], // array, list of local cookies names
            },
            group_3: {
                name: 'Analytics', // string: name
                enable: true, // true, false, you can disable this group by using false
                icon: 'fas fa-chart-bar', // string icon class from font-awesome see -> http://fontawesome.io
                list: ['These types of cookies collect information about your use of the website and enable us to improve the way it works.'],
                blocked_url: ['issuu.com', 'https://www.googletagmanager.com/gtm.js?id=GTM-N496LT', '.sani-resort.com', 'sani-resort.com', 'sani-resort.com', 'sani-resort.com', 'sani-resort.com', 'sani-resort.com', 'https://www.googletagmanager.com/gtm.js', 'https://www.googleadservices.com/pagead/conversion_async.js', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'https://static.hotjar.com/*', 'https://static.hotjar.com/*', 'https://script.hotjar.com/*'], // array list of url blocked scripts
                local_cookies_name: ['__qca', '_dc_gtm_UA-217674-8', '_ga', '_gid', '_ym_d', '_ym_isad', '_ym_retryReqs', '_ym_uid', 'collect', 'undefined'], // array, list of local cookies names
				local_cookies_type: ['HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'Pixel'], // array, list of local cookies names
                local_cookies_duration: ['1 year', '1 day', '2 years', '1 day', '1 year', '1 day', 'Persistent', '1 year', 'Session'], // array, list of local cookies names
                local_cookies_description: ["Collects data on the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded with the purpose of generating reports for optimising the website content.", "Used by Google Tag Manager to control the loading of a Google Analytics script tag.", "Registers a unique ID that is used to generate statistical data on how the visitor uses the website.", "Registers a unique ID that is used to generate statistical data on how the visitor uses the website.", "Contains the date of the visitor's first visit to the website.", "This cookie is used to determine if the visitor has any adblocker software in their browser – this information can be used to make website content inaccessible to visitors if the website is financed with third-party advertisement.", "Registers statistical data on visitors' behaviour on the website. Used for internal analytics by the website operator.", "This cookie is used to collect non-personal information on the visitor's website behavior and non-personal visitor statistics.", "Used to send data to Google Analytics about the visitor's device and behavior. Tracks the visitor across devices and marketing channels."], // array, list of local cookies names
            },
            group_4: {
                name: 'Advertising', // string: name
                enable: true, // true, false, you can disable this group by using false
                icon: 'fas fa-exchange-alt', // string icon class from font-awesome see -> http://fontawesome.io
                list: ['These cookies are used to deliver adverts more relevant to you and your interests. They are also used to limit the number of times you see advertisement as well as help measure the effectiveness of the advertising campaign'],
                blocked_url: ['.dco.gr', 'https://www.google-analytics.com/analytics.js', 'www.sani-resort.com', 'https://track.adform.net*', 'https://cse.google.com*', 'clients1.google.com*', 'adform.net', '.adform.net', 'https://www.google.com/cse/static/*', 'adform.net', 'https://loadus.exelator.com/load/?p=1083&g=74&action=cs&j=0', 'https://connect.facebook.net/*', 'youtube.com', 'yandex.ru', '.doubleclick.net', 'issuu.com', 'quantserve.com', 'www.sani-resort.com', 'google.com', 'google.com', 'youtube.com', '.taboola.com', 'https://googleads.g.doubleclick.net*', 'https://connect.facebook.net/signals/plugins/inferredEvents.js?v=2.8.47', '.exelator.com', 'https://tack.adform.net', 'youtube.com', 'yandex.ru', 'yandex.ru', 'https://mc.yandex.ru/metrika/watch.js', 'youtube.com', 'https://connect.facebook.net/signals/config/1673848082907584?v=2.8.47&r=stable', '.adnxs.com', '.exelator.com', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'hotjar.com*', 'https://static.hotjar.com/*', 'https://static.hotjar.com/*', 'https://script.hotjar.com/*', ' https://ajax.googleapis.com/ajax/*'], // array list of url blocked scripts
                local_cookies_name: ['_fbp', '_gcl_au', '_ym_metrika_enabled', '0', '1P_JAR', 'ads/ga-audiences', 'C', 'cid', 'CONSENT', 'dmp/profile', 'EE', 'fr', 'GPS', 'i', 'IDE', 'iutk', 'mc', 'metrika_enabled', 'NID', 'pagead/1p-user-list/#', 'PREF', 't_gid', 'test_cookie', 'tr', 'ud', 'uid', 'VISITOR_INFO1_LIVE', 'yabs-sid', 'yandexuid', 'yp', 'YSC', 'undefined', 'uuid2', 'hsk_350', '__hstc', '_fbp', '_gac_UA-51401671-1', '_gaexp', '_gcl_aw', '_hjid', 'ajs_anonymous_id', 'ajs_group_id', 'ajs_user_id', 'hubspotutk', 'utm_params', 'undefined'], // array, list of local cookies names
				local_cookies_type: ['HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'Pixel', 'HTTP', 'HTTP', 'HTTP', 'Pixel', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'Pixel', 'HTTP', 'HTTP', 'HTTP', 'Pixel', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP', 'HTTP'], // array, list of local cookies names
                local_cookies_duration: ['3 months', '3 months', '1 day', '1 day', '29 days', 'Session', '30 days', '2 months', '6838 days', 'Session', '119 days', '3 months', '1 day', '1 year', '2 years', '10 years', '13 months', '1 day', '6 months', 'Session', '8 months', '1 year', '1 day', 'Session', '119 days', '2 months', '179 days', 'Session', '1 year', '10 years', 'Session'], // array, list of local cookies names
                local_cookies_description: ["Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.", "Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.", "This cookie is used to collect data on the visitor's behavior on the website - this information can be used to assign the visitor to a visitor segment, based on common preferences.", "", "Collects information on visitor behaviour on multiple websites. This information is used on the website, in order to optimize the relevance of advertisement.", "Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor's online behaviour across websites.", "Used to check if the user's browser supports cookies.", "Optimises ad display based on the user's movement combined and various advertiser bids for displaying user ads.", "Used to detect if the visitor has accepted the marketing category in the cookie banner. This cookie is necessary for GDPR-compliance of the website.", "", "Collects data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.", "Registers a unique ID on mobile devices to enable tracking based on geographical GPS location.", "", "Used by Google DoubleClick to register and report the website user's actions after viewing or clicking one of the advertiser's ads with the purpose of measuring the efficacy of an ad and to present targeted ads to the user.", "Recognises the user's device and what Issuu documents have been read.", "Collects data on the user's visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.", "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences.", "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.", "", "Registers a unique ID that is used by Google to keep statistics of how the visitor uses YouTube videos across different websites.", "This cookie assigns a specific visitor ID, when the visitor interacts with ads or content from the website - this allows the website to target the visitor with similar ads or content.", "Used to check if the user's browser supports cookies.", "Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.", "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.", "Registers a unique user ID that recognises the user's browser when visiting websites that use the same ad network. The purpose is to optimise display of ads based on the user's movements and various ad providers' bids for displaying user ads.", "Tries to estimate the users' bandwidth on pages with integrated YouTube videos.", "Registers data on visitors' website-behaviour. This is used for internal analysis and website optimization.", "Registers data on visitors' website-behaviour. This is used for internal analysis and website optimization.", "Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.", "Registers a unique ID to keep statistics of what videos from YouTube the user has seen."], // array, list of local cookies names
            },
			group_5: {
                name: 'Other', // string: name
                enable: true, // true, false, you can disable this group by using false
                icon: 'fas fa-question', // string icon class from font-awesome see -> http://fontawesome.io
                list: ['Other Technologies may be used for the same purposes as our Cookies, to allow us and third parties to know when you used the Site, and to understand how you interact with emails or advertisement.'],
                blocked_url: ['brandcoreanalytics.azurewebsites.net', 'brandcoreanalytics.azurewebsites.net', 'www.sani-resort.com', 'www.sani-resort.com', 'www.sani-resort.com', 'www.sani-resort.com', 'pingback.issuu.com', 'www.sani-resort.com'], // array list of url blocked scripts
                local_cookies_name: ['_bsid_13', '_ym_metrika_enabled_42297224', '_ym26302566_lsid', '_ym26302566_reqNum', '_ym42297224_lastHit', '_ym42297224_lsid', '_ym42297224_reqNum', 'iutk'], // array, list of local cookies names
				local_cookies_type: ['HTTP', 'HTTP', 'HTML', 'HTML', 'HTML', 'HTML', 'HTML', 'HTTP'], // array, list of local cookies names
                local_cookies_duration: ['Session', '1 day', 'Persistent', 'Persistent', 'Persistent', 'Persistent', 'Persistent', 'Session'], // array, list of local cookies names
                local_cookies_description: ["", "", "", "", "", "", "", ""], // array, list of local cookies names
            },
        },
    },
    forms: {
        prevent_forms_send: false, // true, false, when enabled forms get checkbox with info that need to be checked for form send
        prevent_forms_text: 'I consent to the storage of my data according to the Privacy Policy', // string: information for checkbox info
        prevent_forms_exclude: [], // array of selectors (classes, id), this forms will be excluded from prevent
    },
    configure_mode: {
        on: false,
        parametr: '?configure123456',
        dependencies: ['https://use.fontawesome.com/releases/v5.0.13/css/all.css'],
        debug: false, // bool: true false, debug mode on/off (showing all 3rd party cookies urls, blockes urls names of all local cookies and names of blocked local cookies )
    }
});

jQuery.switcher('.cli-user-preference-checkbox');


jQuery(".cookie_show").click(function() {
	var slug = jQuery(this).data( "cookieid" );
	jQuery( ".hidden-list-cookies." + slug + "-list" ).slideToggle( "slow" );
});

jQuery(".cli-user-preference-checkbox").click(function() {
	var id = jQuery(this).data( "id" );
	
	if(jQuery(this).is(':checked')) {
		jQuery(this).parent().addClass('ct-ultimate-gdpr-cookie-modal-slider-item--active');
	}
	else {
		jQuery(this).parent().removeClass('ct-ultimate-gdpr-cookie-modal-slider-item--active');
		jQuery(this).parent().removeClass('ct-ultimate-gdpr-cookie-modal-slider-item--selected');
	}
	
	if(id == 'group_all') {
		if(jQuery(this).is(':checked')) {
			jQuery( ".cli-user-preference-checkbox" ).attr('checked','checked');
			jQuery( ".ui-switcher" ).attr('aria-checked','true');
			jQuery(".cli-tab-pane .cli-tab-panel-header label").addClass('ct-ultimate-gdpr-cookie-modal-slider-item--active');
		}
		else {
			jQuery( ".cli-user-preference-checkbox" ).removeAttr('checked');
			jQuery( ".ui-switcher" ).attr('aria-checked','false');
			
			jQuery(".cli-tab-pane .cli-tab-panel-header label").removeClass('ct-ultimate-gdpr-cookie-modal-slider-item--active');
			jQuery(".cli-tab-pane .cli-tab-panel-header label").removeClass('ct-ultimate-gdpr-cookie-modal-slider-item--selected');
			
			if (jQuery('.cli-tab-pane .cli-tab-panel-header label').hasClass('switch-group-Essential')) {
				jQuery(".cli-tab-pane .cli-tab-panel-header .switch-group-Essential").addClass('ct-ultimate-gdpr-cookie-modal-slider-item--active');
			}
		}
		jQuery(this).parent().removeClass('ct-ultimate-gdpr-cookie-modal-slider-item--active');
		jQuery(this).parent().removeClass('ct-ultimate-gdpr-cookie-modal-slider-item--selected');
	}
	
});



jQuery('.cookies_policy_popup').click( function() {
            var map_height = $( window ).height() * 0.95;
			tb_show_cookies_policy('', this.href + '?isAjax=false&amp;TB_iframe=true&amp;height=500px&amp;width=1170px', '');
			this.blur();
			stopSlideShow(); //stop header slideshow to improve performance
			return false;
		});

$(function(){
	var f=jQuery('#TB_iframeContent')
	f.load(function(){ 
		f.contents().find('.header_image, .internal_ads').hide(); 
	});
});
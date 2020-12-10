jQuery(function($) {
	$(document).ready(function() {
		if ($('.submenu:has(.current_item)').length)
			$("#section-menu").accordion({"header": "a.menuitem", "autoHeight": false, "active": $('.submenu').index($('.submenu:has(.current_item)'))});
		else {
			$("#section-menu").accordion({"header": "a.menuitem", "autoHeight": false, "active": false});
		}
	});
});


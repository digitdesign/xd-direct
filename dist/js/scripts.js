/*Navbar*/
$(".toggle").on("click", function () {
	$(".toggle").parent().toggleClass('active');
});

/*Email extensions*/
$('#email').on("keyup", function (event) {
	var value = $(this).val();
	var bindTo = $('#email');
	var datalist = $("<datalist />", {
		id: 'email-options'
	}).insertAfter(bindTo);
	bindTo.attr("list", "email-options");
	var domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
	var siteDomains = ["Gmail", "Yahoo", "Hotmail", "Outlook"];
	if (value.indexOf("@") != -1) {
		value = value.split("@")[0];
		newOptionsString = "";
		for (var i = 0; i < domains.length; i++) {
			newOptionsString += "<option value='" + value + "@" + domains[i] + "'>" + siteDomains[i];
		}
		datalist.html(newOptionsString);
	} else {}
});

/*External links*/
$("a[href^=http]:not([href^=godigit])").attr({
	target: "blank",
	rel: "nofollow noreferrer noopener"
});

/*Accessibility*/
$("img:not([alt])").attr("alt", "");
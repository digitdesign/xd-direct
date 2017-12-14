/*Navbar*/
$(".toggle").on("click", function () {
	$(".toggle").parent().toggleClass("active");
});

/*Email extensions*/
$("#email").on("keyup", function (event) {
	var value = $(this).val();
	var bindTo = $("#email");
	var datalist = $("<datalist />", {
		id: "email-options"
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

/*Accessibility & Support*/
$("img:not([alt])").attr("alt", "");
$("header:not([role])").attr("role", "banner");
$("nav:not([role])").attr("role", "navigation");
$("main:not([role])").attr("role", "main");
$("#content:not([role])").attr("role", "main");
$("section:not([role])").attr("role", "region");
$("form:not([role])").attr("role", "form");
$("output:not([role])").attr("role", "status");
$("article:not([role])").attr("role", "article");
$("aside:not([role])").attr("role", "complementary");
$("footer:not([role])").attr("role", "contentinfo");

function escapeHtml(unsafe) {
	return unsafe
		.replace(/“/g, "&#x201C;")
		.replace(/”/g, "&#x201D;")
		.replace(/&/g, "&#x26;")
		.replace(/‘/g, "&#x2018;")
		.replace(/’/g, "&#x2019;")
		.replace(/…/g, "&#x2026;")
		.replace(/–/g, "&#x2013;")
		.replace(/—/g, "&#x2014;")
		.replace(/•/g, "&#x2022;");
}

$("a[href^=http]:not([href^=godigit])").attr({
	target: "blank",
	rel: "nofollow noreferrer noopener"
});
/*! Digit XD Scripts | (c) Go Digit General Insurance Ltd. and Contributors */

// Navbar
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$(".toggle").on("click", function () {
	$(".toggle").parent().toggleClass("active");
});

// Image ALT Text
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("img:not([alt])").attr("alt", "");

// Inline Styles Remover
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("* [style]").removeAttr("style");

// Deprecated Attributes Remover
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("*").removeAttr("align background bgcolor border clear size");
$("table").removeAttr("cellpadding cellspacing width height");
$("link[type]").removeAttr("type");
$("script[type]").removeAttr("type");

// External Link Treatment
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("a").filter(function () {
	return this.hostname && this.hostname !== location.hostname;
}).attr({
	target: "_blank",
	rel: "nofollow noreferrer noopener"
});

// HTML HEX Entities
// ––––––––––––––––––––––––––––––––––––––––––––––––––
function escapeHtml(unsafe) {
	return unsafe
		.replace(/“/g, "&#x201C;")
		.replace(/”/g, "&#x201D;")
		.replace(/‘/g, "&#x2018;")
		.replace(/’/g, "&#x2019;")
		.replace(/–/g, "&#x2013;")
		.replace(/—/g, "&#x2014;")
		.replace(/&/g, "&#x26;")
		.replace(/…/g, "&#x2026;")
		.replace(/•/g, "&#x2022;")
		.replace(/₹/g, "&#x20B9;");
}

// ARIA Roles
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("header:not([role])").attr("role", "banner");
$("nav:not([role])").attr("role", "navigation");
$("main:not([role])").attr("role", "main");
$("#content:not([role])").attr("role", "main");
$("section:not([role])").attr("role", "region");
$("form:not([role])").attr("role", "form");
$("button:not([role])").attr("role", "button");
$("a:not([role])").attr("role", "link");
$("output:not([role])").attr("role", "status");
$("article:not([role])").attr("role", "article");
$("aside:not([role])").attr("role", "complementary");
$("footer:not([role])").attr("role", "contentinfo");

// Email Extensions Autocomplete
// ––––––––––––––––––––––––––––––––––––––––––––––––––
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

// Accordians
// ––––––––––––––––––––––––––––––––––––––––––––––––––
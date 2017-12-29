/*! Digit XD Scripts | (c) Go Digit General Insurance Ltd. and Contributors */

// Navbar
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$(".toggle").on("click", function () {
	$(".toggle").parent().toggleClass("active");
});

// Image ALT text
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("img:not([alt])").attr("alt", "");

// Inline styles remover
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("* [style]").removeAttr("style");

// Deprecated attributes remover
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("*").removeAttr("align background bgcolor border clear size");
$("table").removeAttr("cellpadding cellspacing width height");
$("link[type]").removeAttr("type");
$("script[type]").removeAttr("type");

// Input spellcheck/autocorrect rules
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("input[type=email]:not([spellcheck])").attr("spellcheck", "false");
$("input[type=email]:not([autocorrect])").attr("autocorrect", "off");
$("input[type=url]:not([spellcheck])").attr("spellcheck", "false");
$("input[type=url]:not([autocorrect])").attr("autocorrect", "off");
$("input[type=password]:not([spellcheck])").attr("spellcheck", "false");
$("input[type=password]:not([autocorrect])").attr("autocorrect", "off");
$("input[type=search]:not([spellcheck])").attr("spellcheck", "false");

// External Link Treatment
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("a").filter(function () {
	return this.hostname && this.hostname !== location.hostname;
}).attr({
	target: "_blank",
	rel: "nofollow noreferrer noopener"
});

// HTML HEX entities
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

// ARIA states
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$(":disabled:not([aria-disabled])").attr("aria-disabled", "true");
$(":hidden:not([aria-hidden])").attr("aria-hidden", "true");
$("input[type]([readonly]):([aria-readonly])").attr("aria-readonly", "true");
$(":checked:not([aria-checked])").attr("aria-checked", "true");

// ARIA roles
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("body:not([role])").attr("role", "document");
$("header:not([role])").attr("role", "banner");
$("#header:not([role])").attr("role", "banner");
$("nav:not([role])").attr("role", "navigation");
$("main:not([role])").attr("role", "main");
$("#content:not([role])").attr("role", "main");
$("section:not([role])").attr("role", "region");
$("form:not([role])").attr("role", "form");
$("option:not([role])").attr("role", "option");
$("button:not([role])").attr("role", "button");
$("fieldset:not([role])").attr("role", "group");
$("optgroup:not([role])").attr("role", "group");
$("input[type=text]:not([role])").attr("role", "textbox");
$("input[type=password]:not([role])").attr("role", "textbox");
$("input[type=url]:not([role])").attr("role", "textbox");
$("input[type=email]:not([role])").attr("role", "textbox");
$("input[type=submit]:not([role])").attr("role", "button");
$("input[type=reset]:not([role])").attr("role", "button");
$("input[type=image]:not([role])").attr("role", "button");
$("input[type=checkbox]:not([role])").attr("role", "checkbox");
$("input[type=radio]:not([role])").attr("role", "radio");
$("input[type=range]:not([role])").attr("role", "slider");
//$("input[type]:([list])").attr("role", "combobox");
$("select:not([role])").attr("role", "combobox");
$("progress:not([role])").attr("role", "progressbar");
$("table:not([role])").attr("role", "grid");
$("thead:not([role])").attr("role", "rowgroup");
$("tbody:not([role])").attr("role", "rowgroup");
$("tfoot:not([role])").attr("role", "rowgroup");
$("tr:not([role])").attr("role", "row");
$("td:not([role])").attr("role", "gridcell");
$("a:not([role])").attr("role", "link");
$("hr:not([role])").attr("role", "separator");
$("img:not([role])").attr("role", "img");
$("ul:not([role])").attr("role", "list");
$("ol:not([role])").attr("role", "list");
$("datalist:not([role])").attr("role", "listbox");
$("li:not([role])").attr("role", "listitem");
$("output:not([role])").attr("role", "status");
$("article:not([role])").attr("role", "article");
$("aside:not([role])").attr("role", "complementary");
$("footer:not([role])").attr("role", "contentinfo");

// Email extensions autocomplete
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("input[type=email]").on("keyup", function (event) {
	var value = $(this).val();
	var bindTo = $("input[type=email]");
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
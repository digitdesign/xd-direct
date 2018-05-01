/*! Copyright (c) 2018 Go Digit General Insurance Ltd. or its affiliates */

// Navbar
// ––––––––––––––––––––––––––––––––––––––––––––––––––
document.getElementsByClassName('.toggle').onclick(function () {
	document.getElementsByClassName('.toggle').parent.toggleClass("active");
});

// Image ALT text
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("img:not([alt])").setAttribute("alt", "");

// External link treatment
// ––––––––––––––––––––––––––––––––––––––––––––––––––
$("a").filter(function () {
	return this.hostname && this.hostname !== location.hostname;
}).setAttribute({
	target: "_blank",
	rel: "nofollow noreferrer noopener"
});

/*! Copyright (c) 2018 Go Digit General Insurance Ltd. or its affiliates */

// Navbar
// ––––––––––––––––––––––––––––––––––––––––––––––––––
document.getElementsByClassName('.toggle').onclick(function () {
	let navButton = document.getElementsByClassName('.toggle').parent;
    navButton.classList.toggle("active")
});

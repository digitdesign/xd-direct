/*! Copyright (c) 2018 Go Digit General Insurance Ltd. or its affiliates */

// Navbar
// ––––––––––––––––––––––––––––––––––––––––––––––––––
const navbarToggle = document.getElementsByClassName('.toggle');
navbarToggle.click(function () {
	let navButton = document.getElementsByClassName('.toggle').parent;
    navButton.classList.toggle("active");
});

/*Navbar*/
$(".toggle").on("click", function () {
	$(".toggle").parent().toggleClass('active');
});

/*Input Field Formatting*/
document.getElementById("regno").addEventListener('input', function (e) {
	e.target.value = e.target.value.replace(/[^\d0-9a-zA-Z]/g, '').replace(/^(.{2})(.{2})(.{2})(.{4})$/g, "$1 $2 $3 $4").trim();
});

/*Input Maxlength Auto Change*/
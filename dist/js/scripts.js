/*Navbar*/
$(".toggle").on("click", function () {
	$(".toggle").parent().toggleClass('active');
});

/*Email Domain Datalist Helper*/
/*CODE NEEDS TO BE CLEANED UP*/
var EmailDomainSuggest = {
	domains: ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"],
	bindTo: $('#email'),
	init: function () {
		this.addElements();
		this.bindEvents();
	},
	addElements: function () {
		this.datalist = $("<datalist />", {
			id: 'email-options'
		}).insertAfter(this.bindTo);
		this.bindTo.attr("list", "email-options");
	},
	bindEvents: function () {
		this.bindTo.on("keyup", this.testValue);
	},
	testValue: function (event) {
		var el = $(this),
			value = el.val();
		if (value.indexOf("@") != -1) {
			value = value.split("@")[0];
			EmailDomainSuggest.addDatalist(value);
		} else {
			EmailDomainSuggest.datalist.empty();
		}
	},
	addDatalist: function (value) {
		var i, newOptionsString = "";
		for (i = 0; i < this.domains.length; i++) {
			newOptionsString += "<option value='" + value + "@" + this.domains[i] + "'>";
		}
		this.datalist.html(newOptionsString);
	}
}
EmailDomainSuggest.init();
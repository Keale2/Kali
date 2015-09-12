// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require('jquery');

// this is so much fun i want to do this more often!

 //alert("Hi!what up :).");
 

var els = document.getElementsByClassName("changeMessage");

[].forEach.call(els, function (el) {
	el.addEventListener("click", function () {
		el.innerText = el.getAttribute("data-message");
	});
});
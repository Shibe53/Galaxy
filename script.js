// Header - dispare cand dai scroll in jos si apare cand dai scroll in sus
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector("header").classList.remove("hide");
	} else {
		document.querySelector("header").classList.add("hide");
	}
	prevScrollpos = currentScrollPos;
}

// Butonul de pe pagina principala (cu form) - animatie cand e apasat
window.onload=function(){
	let button = document.getElementById("button");
	let form = document.getElementById("form");
	let container = document.querySelector(".button-container");

	button.addEventListener("mousedown", function() {
		button.classList.add("disappear");
		form.classList.add("active");
		container.classList.add("plus")
	});

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		// Extra cod pentru submissions
	});
}
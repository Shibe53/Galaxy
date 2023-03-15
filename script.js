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
var button = document.getElementById("turn");

button.addEventListener("click", function() {
	document.getElementById("btn-cnt").classList.toggle("button-container2");
	button.style.display.none; // visibility
});
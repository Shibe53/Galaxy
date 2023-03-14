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

// Buttonul de pe pagina principala (cu form) - animatie cand e apasat
var button = document.querySelector("button");

button.addEventListener("click", function() {
    button.focus();
});


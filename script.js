// Header - dispare cand dai scroll in jos si apare cand dai scroll in sus
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector("header").classList.remove("hide");
	} else {
		document.querySelector("header").classList.add("hide");
	}
	prevScrollpos = currentScrollPos;
}

// Functie de care e nevoie pentru ca addEventListener sa nu dea eroare
window.onload = function(){

	// Butonul de pe pagina principala (cu form) - animatie cand e apasat
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
		form.classList.add("submitted");
	});

	// Butoanele de jos - apare text specific fiecareia cand sunt apasate
	let buttons = document.querySelectorAll('.button');
	let texts = document.querySelectorAll('.text');
	let backButton = document.getElementById('back-button');

	buttons.forEach(button => {
  		button.addEventListener('click', () => {
    		texts.forEach(text => {
      			if (text.id == `text${button.id.slice(-1)}`) {
        			text.classList.remove('hidden');
      			} else {
        			text.classList.add('hidden');
      			}
    		});
    		buttons.forEach(btn => {
    			if (btn.id != button.id) {
        			btn.style.display = 'none';
      			} else {
					btn.style.cursor = 'default';
				}
    		});
    		backButton.classList.remove('hidden');
  		});
	});

	backButton.addEventListener('click', () => {
  		texts.forEach(text => {
    		text.classList.add('hidden');
  		});
  		buttons.forEach(button => {
    		button.style.display = 'block';
			button.style.cursor = 'pointer';
  		});
		backButton.classList.add('hidden');
	});
}
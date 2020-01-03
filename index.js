for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', function() {
		let clickedButton = this.innerHTML;
		makeSound(clickedButton);
		animateButton(clickedButton);
	});
}

document.addEventListener('keypress', function(e) {
	makeSound(e.key);
	animateButton(e.key);
});

function makeSound(key) {
	switch (key) {
		case 'j':
			let crash = new Audio('sounds/crash.mp3');
			crash.play();
			break;
		case 'l':
			let kick = new Audio('sounds/kick-bass.mp3');
			kick.play();
			break;
		case 'k':
			let snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;
		case 'a':
			let tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;
		case 's':
			let tom2 = new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;
		case 'd':
			let tom3 = new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;
		case 'f':
			let tom4 = new Audio('sounds/tom-4.mp3');
			tom4.play();
			break;
		case 'g':
			let openHat = new Audio('sounds/Hi-Hat-Open.mp3');
			openHat.play();
			break;
		case 'h':
			let closedHat = new Audio('sounds/Hi-Hat-Closed.mp3');
			closedHat.play();
			break;
		default:
			break;
	}
}

function animateButton(currentButton) {
	document.querySelector(`.${currentButton}`).classList.add('pressed');
	setTimeout(() => {
		document.querySelector(`.${currentButton}`).classList.remove('pressed');
	}, 100);
}

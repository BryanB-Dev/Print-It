const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

// Index de la slide actuelle
let currentSlideIndex = 0;

// Création des bullet points
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		// Marquer le premier point comme actif
		if (i === 0) {
			dot.classList.add('dot_selected');
		}
		dotsContainer.appendChild(dot);
	}
}

// Fonction pour mettre à jour les bullet points
function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === currentSlideIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Fonction pour mettre à jour le slide (image + texte)
function updateSlide() {
	const currentSlide = slides[currentSlideIndex];
	// Mise à jour de l'image
	bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
	// Mise à jour du texte
	bannerText.innerHTML = currentSlide.tagLine;
	// Mise à jour des dots
	updateDots();
}

// Navigation vers le slide suivant
function nextSlide() {
	currentSlideIndex++;
	// Retour au début si on dépasse la fin
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}
	updateSlide();
}

// Navigation vers le slide précédent
function prevSlide() {
	currentSlideIndex--;
	// Aller à la fin si on est en dessous de 0
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}
	updateSlide();
}

// Initialiser les dots au chargement
createDots();

// Event listeners pour les flèches
arrowLeft.addEventListener('click', function() {
	console.log('Clic sur la flèche gauche - Slide précédent');
	prevSlide();
});

arrowRight.addEventListener('click', function() {
	console.log('Clic sur la flèche droite - Slide suivant');
	nextSlide();
});

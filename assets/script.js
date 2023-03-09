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

/* initialisation des constantes et variables */ 
let slidesContainer = document.getElementById("slides-container");
let slide = document.querySelector(".slide");
const bannerText = document.querySelector('#banner');
const numberOfSlide = slides.length;
let i = 0;
let paragraph = null;
let img = null;

function initslide()
{
	let prevButton = document.getElementById("slide-arrow-prev");
	let nextButton = document.getElementById("slide-arrow-next");
	/* on recupère l'element slide */
	let slide = document.querySelector("#banner");
	/* on crée une balise p dans slide */
	paragraph = document.createElement("p");
	paragraph.innerHTML = slides[i].tagLine;
	/* on ajoute le paragraphe dans le slide */
	slide.appendChild(paragraph)
	/* on crée une balise img dans slide */
	image = document.createElement("img");
	image.src = `./assets/images/slideshow/${slides[i].image}`; 
	image.classList.add("banner-img");
	/* on ajoute l'image dans le slide */
	slide.appendChild(image);

	/* action suite au click sur la flèche droite */
	nextButton.addEventListener("click", () => {
		  if (i == numberOfSlide - 1) 
		  {
			  i = 0;
		  } 
		  else 
		  {
				  i++;
		  }
	      /* on selectionne le point a afficher avec l'image pour un clic next */
	      slideTo();
	  });

	/* action suite au click sur la flèche gauche */
	prevButton.addEventListener("click", () => {
		 if (i == 0) 
		 {
		   i = numberOfSlide - 1;
	     }
	     else 
		 {
		   i--;
		 }
		 /* on selectionne le point a afficher avec l'image pour un clic prev */
		 slideTo();
	   });

}

/* on créé les points (dot) */ 
function showDots() 
	{
		const dots = document.querySelector('.dots');
		for (let j = 0; j < numberOfSlide; j++) 
		{
			const dot = document.createElement('span');
			dot.id='span' + j;
   			dot.addEventListener('click', function(event) 
				{ 
				i = Number(event.target.id.replace('span', ''));
	 			slideTo();
				});
			dot.classList.add('dot');
			dots.appendChild(dot);
			/* initialisation qd on lance la page */
			if (j == 0) 
				{ 
				dots.children[j].classList.add('dot_selected');
				}
		}
 	}

/* cette fonction permet d'afficher le texte et l'image pour un point ou fleche cliqué */
function slideTo ()
{
	paragraph.innerHTML = slides[i].tagLine;
	image.src = `./assets/images/slideshow/${slides[i].image}`; 
	selected();
}

/* on fait un lien entre le point et l'image */
function selected() 
	{
		const dot = document.getElementsByClassName('dot');
		for (let i = 0; i < dot.length; i++) 
			{
			dot[i].classList.remove('dot_selected');
			}
		dot[i].classList.add('dot_selected');
	 }

initslide();
showDots();
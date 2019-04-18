function show() {
	document.getElementById("switch").style.width = "30%"; //fait apparaitre la barre de navigation
	document.body.style.backgroundColor = "hsl(0, 0%, 12%)"; //rend le reste du site de la même couleur que l'onglet 
	document.getElementById("foo").style.backgroundColor = "hsl(0, 0%, 12%)"; // "overwrite" le "background-color:white" (pour le #foo du css) change la couleur du reste du site
	document.getElementById("invisible").style.visibility = "hidden"; // cache le site pour empêcher l'utilisateur de voir encore les titres et radial gradient "à travers" le background gris
	document.getElementById("button").innerHTML = "X" ; //change le symbole  qui fait défiler le menu(barre de navigation) en croix
	document.getElementById("Button").innerHTML = "X"; // change le symbole du menu en croix ( car changé par la suite)
	document.getElementById("Button").style.fontSize = "28px"; // remet la même taille de font qu'avait l'ancien symbole (croix)
	document.getElementById("Button").style.padding = "12px 20px"; // remet le même padding qu'initialement
}

function hide() {
	document.getElementById("button").innerHTML = "&#9776;"; // rétabli le symbole qui fait afficher le menu
	document.getElementById("Button").innerHTML = "&#171;"; // change la croix du menu en "<<"
	document.getElementById("Button").style.fontSize = "45px"; // change la taille du nouveau symbole (<<)
	document.getElementById("Button").style.padding = "0.5% 20px"; //change le padding du nouveau symbole
	document.getElementById("switch").style.width = "0"; // cache le menu
	document.body.style.backgroundColor = "hsl(0, 0%, 90%)"; //retabli la couleur (background) du "body"/footer
	document.getElementById("foo").style.backgroundColor = "white"; //retabli la couleur du reste du site
	document.getElementById("invisible").style.visibility = "visible"; // rend le site (tout sauf le menu) de nouveau visible
}

function init() { // fonction init pour exéctuer le script suivant dès le chargement du body
	var sticky = icon.offsetTop // définit la variable sticky  qui est le nom de la classe qui permettra que l'icone qui ouvre le menu reste tout le temps en haut de la page
	window.onscroll = // lorsque l'utilisateur scroll appelle la fonction "Scroll()"
	function() {
		Scroll();
	}; 

	function Scroll() { 
		if (window.pageYOffset > sticky) {
			icon.classList.add("sticky");// dès que la page dépasse un certain point, le programme ajoute la classe "sticky" à l'élément avec l'id "icon" et rajoute une bordure, sinon il enlève les 2.
		    document.getElementById("icon").style.border = "solid"; // ajoute une bordure avec linear gradient puis l'enlève si la condition n'est pas remplie
		    document.getElementById("icon").style.borderImage = " linear-gradient(to left, hsl(195, 53%, 55%), hsl(0, 0%, 20%), hsl(0, 0%, 25%), hsl(0, 0%, 30%), crimson)";
		    document.getElementById("icon").style.borderImageSlice = "3";
		    document.getElementById("icon").style.borderWidth = "1.5px";
		    document.getElementById("icon").style.margin = "0 0 0 0.3%"; // ajoute un espzce entre le bord de la page pour pas que la bordure soit collé au bord de la fenêtre */
		} else {
			icon.classList.remove("sticky");
	    	document.getElementById("icon").style.border = "none";
	    }
	}
}

function show() {
	document.getElementById("switch").style.width = "28%"; //fait apparaitre la barre de navigation
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
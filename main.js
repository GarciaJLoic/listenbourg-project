const buttonMenu = document.querySelector('#navButton'); // Selectionne le bouton
const navList = document.querySelector('#navList'); // Selectionne le conteneur de la liste
const elementsMenu = navList.children; // Selectionne la liste des éléments à afficher/faire disparaître
let elementMenuArray = [4, 0, 1, 2, 3, 6]  // Ordre d'apparition des éléments
let i = 0; // variable d'itération de la boucle

/* ******************************* */
/* FUNCTION  NAV MENU EXPAND*/
/* *****************************/
function navMenuExpand() {
    elementsMenu[elementMenuArray[i]].classList.toggle('hidden'); /* Si les éléments n'ont pas la classe hidden, l'ajoute sinon la retire */

    if (i < (elementMenuArray.length) - 1) { // recommence tant qu'il reste des éléments
        i++; // Intération de la boucle
        setTimeout(navMenuExpand, 100) //Attend 1s avant de relancer la fonction.
    }
    else { // S'il ne reste plus d'élément 
        document.querySelector("#navButton").disabled = false; // Réactive le bouton
        elementMenuArray = elementMenuArray.reverse(); // Inverse le tableau des éléments
        i = 0; // Remet la boucle à zéro
    }
}

buttonMenu.onclick = function () { // Active la fonction lors du clic du bouton
    document.querySelector("#navButton").disabled = true; // Désactive le bouton
    navMenuExpand(); // Lance la fonction 
};

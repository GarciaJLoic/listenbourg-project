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

    if (elementsMenu[elementMenuArray[i]].classList[0] === "none") { /* Vérifie si les éléments ont la classe none */

        for (let j = 0; j < elementMenuArray.length; j++) { /*  Boucle qui recommence pour tous les éléments*/
            elementsMenu[elementMenuArray[j]].classList.remove('none'); /*  Retire la class none à tous les éléments*/
        }
    }
    if (i < (elementMenuArray.length) - 1) { // recommence tant qu'il reste des éléments

        i++; // Intération de la boucle
        setTimeout(navMenuExpand, 100) //Attend 1s avant de relancer la fonction.
    }
    else { // S'il ne reste plus d'élément 
        elementMenuArray = elementMenuArray.reverse(); // Inverse le tableau des éléments
        i = 0; // Remet la boucle à zéro
        if (elementsMenu[elementMenuArray[i]].classList[0] === "hidden") { /* Vérifie si les éléments ont la classe hidden */
            setTimeout(function () { /*  Paramètre le délai avant de lancer la boucle*/
                for (let i = 0; i < elementMenuArray.length; i++) {/*  Boucle qui recommence pour tous les éléments*/
                    elementsMenu[elementMenuArray[i]].classList.add('none');/*  Ajoute la class none à tous les éléments*/

                }
            }, 500)
        }
    }
}

buttonMenu.onclick = function () { // Active la fonction lors du clic du bouton
    document.querySelector("#navButton").disabled = true; // Désactive le bouton
    setTimeout(function () {
        document.querySelector("#navButton").disabled = false; // Réactive le bouton
    }, 1000)
    navMenuExpand(); // Lance la fonction 
};

/* ******************************* */
/* FUNCTION  IMAGE CLIC   /
/* *****************************/



const element = document.getElementsByClassName("imgClick") // Cible les éléments qui ont pour classe imgClick
for (let i = 0; i < element.length; i++) { // Boucle qui recommence tant qu'il reste des éléments 
    element[i].onclick = function () { // Active la fonction lors du clic du bouton
        element[i].classList.toggle("imgAfterClick") // Si l'élément possède la classe imgAfterClick la retire, sinon l'ajoute
    }
}

/* ******************************* */
/* FUNCTION  HISTOIRE CLIC   /
/* *****************************/



const elem = document.getElementsByClassName("date") // Cible les éléments qui ont pour classe imgClick
const evenementHistoire = document.getElementsByClassName("evenementHistoire")
for (let i = 0; i < elem.length; i++) { // Boucle qui recommence tant qu'il reste des éléments 
    elem[i].onclick = function () { // Active la fonction lors du clic du bouton
        for (let j = 0; j < evenementHistoire.length; j++) {
            evenementHistoire[j].classList.remove("messageDesktop")
            evenementHistoire[j].classList.add("noneDesktop")
            evenementHistoire[i].classList.remove("noneDesktop")
        }
    }
}

/* ******************************* */
/*   GALERY*/
/* *****************************/
let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
    let gridItemClicked = e.target.closest(".grid-item");
    let clickedImageName = gridItemClicked.id;
    popupBg.classList.add("active");
    popupImg.src = `./galery/${clickedImageName}.jpg`;
};

const closePopup = () => {
    popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);



let commande = {
    burger: {
        nom: "Burger",
        prix: 5.50,
        image:"img/burger.png"
    },
    boisson: {
        nom: "Boisson",
        prix: 4.00,
        image:"img/drink.png"
    },
    frite:{
        nom: "Frite",
        prix: 3.50,
        image:"img/fried-potatoes.png"
    },
    glace:{
        nom: "Glace",
        prix: 4.40,
        image:"img/glace.png"
    },
    bigMenu: {
        nom: "Menu-XXL",
        prix: 8.50,
        image:"img/menu.png"
    },
    waterMelon:{
        nom: "Water melon",
        prix: 6.50,
        image:"img/watermelon.png"
    }
}

const imgBurger = new Image(35)
const boisson = new Image(80)
const frite = new Image(80)
const glace = new Image(80)
const bigMenu = new Image(80)
const waterMelon = new Image(80)
        
imgBurger.src = commande.burger.image; boisson.src = commande.boisson.image
frite.src = commande.frite.image; glace.src = commande.glace.image
bigMenu.src = commande.bigMenu.image; waterMelon.src = commande.waterMelon.image

imgBurger.classList.add("burger-swiftfood");
boisson.classList.add("drink-swiftfood");
frite.classList.add("frite-swiftfood");
glace.classList.add("ice-swiftfood");
bigMenu.classList.add("bigMenu-swiftfood"); 
waterMelon.classList.add("warterMelon-swiftfood");

function createIngredien(para_tag){ return document.createElement(para_tag) }

const targetContentIngredient = document.querySelector('.content-ingredient');

const createElementBurger = createIngredien("div")
const createElementDrink = createIngredien("div")
const createElementfrite = createIngredien("div")
const createElementIce = createIngredien("div")
const createElementBigMenu = createIngredien("div")
const createElementWaterMelon = createIngredien("div")

targetContentIngredient.appendChild(createElementBurger)
targetContentIngredient.appendChild(createElementDrink)
targetContentIngredient.appendChild(createElementfrite)
targetContentIngredient.appendChild(createElementIce)
targetContentIngredient.appendChild(createElementBigMenu)
targetContentIngredient.appendChild(createElementWaterMelon)

createElementBurger.appendChild(imgBurger)
createElementDrink.appendChild(boisson)
createElementfrite.appendChild(frite)
createElementIce.appendChild(glace)
createElementBigMenu.appendChild(bigMenu)
createElementWaterMelon.appendChild(waterMelon)

const target_burger = document.querySelector('.burger-swiftfood');
const target_drink = document.querySelector('.drink-swiftfood');
const target_frite = document.querySelector('.frite-swiftfood'); 
const target_ice = document.querySelector('.ice-swiftfood'); 
const target_bigMenu = document.querySelector('.bigMenu-swiftfood'); 
const target_waterMelon = document.querySelector('.warterMelon-swiftfood');

const tab = [target_burger, target_drink, target_frite, target_ice, target_bigMenu, target_waterMelon]

for(let i = 0; i < tab.length; i = i + 1){

    const divAlls = document.querySelectorAll('.content-ingredient div');
    divAlls[i].classList.add('cell-food')
    document.querySelectorAll('.cell-food');
    let clickCount = 0;
    const maxClicks = 1;

    function foodz(){ 
        divAlls[i].classList.replace('cell-food', 'active');
        // "getElementsByClassName" est un Compteur de class dans le DOM 
        // cet methode comptera toute les class avec l'evenement click ! 
        const nombreElements = document.getElementsByClassName("active");
        // Cet condition permet de fixer une limite à ne pas dépasser.
        // avec la variables maxClicks.
        if (clickCount < maxClicks) {
        clickCount++;
        console.log('Clic n°' + clickCount);
        console.log(divAlls[i])
        // Ajoutez ici le code à exécuter au clic
        }
    }

    const btn_foodz = document.querySelectorAll('.cell-food')[i];
    btn_foodz.addEventListener('click', foodz, true);
    
}
            
        




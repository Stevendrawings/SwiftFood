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

const imgBurger = new Image(60)
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

function createIngredien(para_tag){
    return document.createElement(para_tag)
}

const targetContentIngredient = document.querySelector('.content-ingredient');

const createElementBurger = createIngredien("div");
const createElementDrink = createIngredien("div");
const createElementfrite = createIngredien("div");
const createElementIce = createIngredien("div");
const createElementBigMenu = createIngredien("div");
const createElementWaterMelon = createIngredien("div");

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


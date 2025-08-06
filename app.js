
// DATA 
const fastFoodz = {
    burger: { nom: "burger", id: 1, img: "img/burger.png", price: 4.50 },
    frite: { nom: "frite", id: 2, img: "img/fries.png", price: 2.50 },
    boisson: { nom: "boisson", id: 3, img: "img/soda.png", price: 5.20 },
    menuXXL: { nom: "Menu XXL", id: 4, img: "img/menu.png", price: 8.10 },
    glace:{ nom: "glace", id: 5, img: "img/ice-cream-cup.png", price: 4.30 },
    waterMelon:{ nom: "Water melon", id: 6, img: "img/watermelon.png", price: 3.50 }
}

let tab = []; tab = Array(6).fill('')

let imgBurger = new Image(40);
let imgFrite = new Image(50);
let imgBoisson = new Image(55);
let imgMenuXXL = new Image(55);
let imgGlace = new Image(55);
let imgWaterMelon = new Image(55);

    imgBurger.src = fastFoodz.burger.img;
    imgFrite.src = fastFoodz.frite.img
    imgBoisson.src = fastFoodz.boisson.img
    imgMenuXXL.src = fastFoodz.menuXXL.img
    imgGlace.src = fastFoodz.glace.img
    imgWaterMelon.src = fastFoodz.waterMelon.img

console.log(imgBurger, imgFrite, imgBoisson, imgMenuXXL, imgGlace, imgWaterMelon)

const btn = document.querySelectorAll(".block")
const p = document.querySelectorAll("p")

for(let i = 0; i < btn.length; i = i + 1){

    btn[0].appendChild(imgBurger)
    btn[1].appendChild(imgFrite)
    btn[2].appendChild(imgBoisson)
    btn[3].appendChild(imgMenuXXL)
    btn[4].appendChild(imgGlace)
    btn[5].appendChild(imgWaterMelon)
    
const tabObj = [
    fastFoodz.burger.id,
    fastFoodz.frite.id,
    fastFoodz.boisson.id,
    fastFoodz.menuXXL.id,
    fastFoodz.glace.id,
    fastFoodz.waterMelon.id
];

const quantitys = Math.floor(Math.random() * tabObj.length)
console.log(quantitys)

    let count = 0;
    let indice = 1;
    //p[i].innerText = "0";

btn[i].addEventListener('click', function clikcord(){
    if(indice <= 6){ 
        tab.splice(i, 1, indice);
        indice++ 
    } else { return false } 

    // 0 + 1 + 2 + 3 + 4         
    const initVal = tab.reduce((acc, val) => acc 
    + parseInt(Number(val)), count);  

    if(initVal <= 6){
        console.log("tab:", tab);
        //p[i].innerText = tab[i]
        console.log("initVal:", initVal);
    } else { return false }
    });
}







// DATA 
const fastFoodz = {
    burger: { nom: "burger", id: 1, img: "img/burger.png", price: 4.50 },
    frite: { nom: "frite", id: 2, img: "img/fries.png", price: 2.50 },
    boisson: { nom: "boisson", id: 3, img: "img/soda.png", price: 5.20 },
    menuXXL: { nom: "Menu XXL", id: 4, img: "img/menu.png", price: 8.10 },
    glace:{ nom: "glace", id: 5, img: "img/ice-cream-cup.png", price: 4.30 },
    waterMelon:{ nom: "Water melon", id: 6, img: "img/watermelon.png", price: 3.50 }
}

let tab = []; tab = Array(5).fill('');
let tabs = [];

let imgBurger = new Image(40);
let imgFrite = new Image(50);
let imgBoisson = new Image(55);
let imgMenuXXL = new Image(55);
let imgGlace = new Image(55);
let imgWaterMelon = new Image(55);

    imgBurger.src = fastFoodz.burger.img; imgFrite.src = fastFoodz.frite.img
    imgBoisson.src = fastFoodz.boisson.img; imgMenuXXL.src = fastFoodz.menuXXL.img
    imgGlace.src = fastFoodz.glace.img; imgWaterMelon.src = fastFoodz.waterMelon.img

const btn = document.querySelectorAll(".block")
const span = document.querySelectorAll("span")
const quantitysor = document.getElementById("quantitysor");
const contentDivParentFoodz = document.querySelector(".content-tag")

const btnResultat = document.querySelector(".button-74")

    const tableur = [];
            let counter = 0;

    const tabObj_nom = [
        fastFoodz.burger.nom, 
        fastFoodz.frite.nom,
        fastFoodz.boisson.nom, 
        fastFoodz.menuXXL.nom,
        fastFoodz.glace.nom, 
        fastFoodz.waterMelon.nom
    ];

for(let i = 0; i < btn.length; i = i + 1){

    btn[0].appendChild(imgBurger); 
    btn[1].appendChild(imgFrite)
    btn[2].appendChild(imgBoisson); 
    btn[3].appendChild(imgMenuXXL)
    btn[4].appendChild(imgGlace); 
    btn[5].appendChild(imgWaterMelon)

    const quantitys = Math.floor(Math.random() * tabObj_nom.length)
    tableur.splice(i, 1, tabObj_nom[quantitys]);

    let count = 0;
    let indice = 1;
    span[i].innerText = "0";
  
btn[i].addEventListener('click', function clikcord(){
    if(indice <= 6){ tab.splice(i, 1, indice);
        indice++ 
    } else { return false } 

    // 0 + 1 + 2 + 3 + 4         
    const initVal = tab.reduce((acc, val) => acc + parseInt(Number(val)), count);  

    if(initVal <= 6){

        btn[i].classList.add("active")
        quantitysor.innerText = initVal;
        "tab:", tab;
        span[i].innerText = tab[i];
        let listesFoodz = document.createElement("li")
        contentDivParentFoodz.appendChild(listesFoodz)
        const input_foodz = document.querySelector(".input"); 
        const target_li_foodz = document.querySelectorAll('ul.content-tag li')
        const valFoodz = Object.values(target_li_foodz);
        listesFoodz.classList.add("listefoodz");

        switch (tabObj_nom[i]){
            case "burger": listesFoodz.style.backgroundColor = "#ff7675"; break;
            case "frite": listesFoodz.style.backgroundColor = "#ffb326"; break;
            case "boisson": listesFoodz.style.backgroundColor = "#00cec9"; break;
            case "Menu XXL": listesFoodz.style.backgroundColor = "#575fcf"; break; 
            case "glace": listesFoodz.style.backgroundColor = "#fd79a8"; break;
            case "Water melon": listesFoodz.style.backgroundColor = "#4bcffa"; break; 
            default: console.log(`Sorry, we are out of ${tabObj_nom[i]}.`);
        };

        input_foodz.style.display = "none";
        tabs.push(tabObj_nom[i])

        let toutesBonnes = true;

        for (let u = 0; u < tableur.length; u = u + 1) {

            // Drapeau pour suivre si tout est correct
                listesFoodz.innerText = tabObj_nom[i];
            if(tableur[u] == tabs[u]){
                console.log(tableur[u], tabs[u], "Bonne réponse");
            } else {
                console.log(tableur[u], tabs[u], "Mauvaise réponse");
                toutesBonnes = false;
            }
        }

        console.log(tabs)  

        contentDivParentFoodz.insertBefore(listesFoodz, input_foodz)
        "initVal:", initVal;
        } else { return false }

    });
        console.log(tableur) 
}

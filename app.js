
let tab = [];
tab = Array(6).fill('')

const btn = document.querySelectorAll(".block")
const p = document.querySelectorAll("p")

for(let i = 0; i < btn.length; i = i + 1){

    let count = 0;
    let indice = 1;

    p[i].innerText = "0";

btn[i].addEventListener('click', function clikcord(){

        if(indice <= 6){ 
            tab.splice(i, 1, indice)
            indice++ 
        } else {
            return false;
        } 
    
    // 0 + 1 + 2 + 3 + 4         
    const initVal = tab.reduce((acc, val) => acc + parseInt(Number(val)), count);  

        if(initVal <= 6){
            console.log("tab:", tab);
            p[i].innerText = tab[i]
            console.log("initVal:", initVal);
        } else {
            return false
        }
    });

}






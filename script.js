const maitre = Math.floor(Math.random() * 101);
var essaie = 10;
console.log(maitre);

function selected(){
    document.getElementById("chiffre_joueur").classList.add("input_select");
    document.getElementById("chiffre_joueur").classList.remove("input_no_select");
}

function no_selected(){
    document.getElementById("chiffre_joueur").classList.add("input_no_select");
    document.getElementById("chiffre_joueur").classList.remove("input_select");
}

function verif(){
    essaie--;
    var joueur = document.getElementById("chiffre_joueur").value;

    if (maitre == joueur && essaie > -1){
        document.getElementById("situation").textContent = "BRAVO ! Le chiffre etait : " + maitre;
        document.querySelector("body > div > button").remove();
        console.log(); 
    }
    else if (maitre > joueur && essaie > -1){
        document.getElementById("situation").textContent = "C'est plus";
        document.getElementById("nb_essaie").textContent = "Nombre d'essaie restant : " + essaie;
    }
    else if (maitre < joueur && essaie > -1){
        document.getElementById("situation").textContent = "C'est moins";
        document.getElementById("nb_essaie").textContent = "Nombre d'essaie restant : " + essaie;
    }
    if(essaie == 0){
        document.querySelector("body > div > button").remove();
        document.getElementById("situation").textContent = "Dommage, tu as épuisé toutes tes chances";
    }

}
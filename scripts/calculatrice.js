let calcul = ""

function ajouterAuCalcul(caractere) {
    calcul += caractere;
    console.log(calcul)
    document.getElementById("stringCalcul").innerHTML = calcul;
}

function calculer() {
    let affiche = document.getElementById("stringCalcul").innerHTML
    console.log(eval(affiche))
    document.getElementById("stringCalcul").innerHTML = eval(affiche)
}




//let sept = document.querySelector("#sept")
// let huit = document.querySelector("#huit")
// let neuf = document.querySelector("#neuf")
// let quatre = document.querySelector("#quatre")
// let cinq = document.querySelector("#cinq")
// let six = document.querySelector("#six")
// let un = document.querySelector("#un")
// let deux  = document.querySelector("#deux")
// let trois = document.querySelector("#trois")
// let plus = document.querySelector("#plus")
// let moins = document.querySelector("#moins")
// let fois = document.querySelector("#fois")
// let diviseur = document.querySelector("#diviseur")
// let operateur = document.querySelector("#operateur")
// let nb2 = document.querySelector("#nb2")

// let nombres = document.querySelectorAll(['nombre'])

// nombres.forEach

//  let ajoutNombre = () => {
//     nb1.innerHTML = sept.innerHTML.toString();
// }

// let nombre1 = () => {
//     // sept.innerHTML = ""
//     nb1.innerText = sept.innerText
// }
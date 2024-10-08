document.addEventListener('DOMContentLoaded', (event) => {

let affichage = "";
let calcul = [];

function show(valeur){
    affichage += valeur;
    document.getElementById("result").innerHTML = affichage;
}
function reloadResult(valeur){
    document.getElementById("result").innerHTML = valeur;
}

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn0 = document.getElementById("btn0")
const btn_plus = document.getElementById("btn+")
const btn_moin = document.getElementById("btn-")
const btn_fois = document.getElementById("btn*")
const btn_div = document.getElementById("btn/")
const btn_del = document.getElementById("btn_del")
const btn_enter = document.getElementById("btn_enter")

btn1.addEventListener('click', ()=>{
    show("1")
    calcul = calcul.concat(1)
});
btn2.addEventListener('click', ()=>{
    show("2")
    calcul = calcul.concat(2)
});
btn3.addEventListener('click', ()=>{
    show("3")
    calcul = calcul.concat(3)
});
btn4.addEventListener('click', ()=>{
    show("4")
    calcul = calcul.concat(4)
});
btn5.addEventListener('click', ()=>{
    show("5")
    calcul = calcul.concat(5)
});
btn6.addEventListener('click', ()=>{
    show("6")
    calcul = calcul.concat(6)
});
btn7.addEventListener('click', ()=>{
    show("7")
    calcul = calcul.concat(7)
});
btn8.addEventListener('click', ()=>{
    show("8")
    calcul = calcul.concat(8)
});
btn9.addEventListener('click', ()=>{
    show("9")
    calcul = calcul.concat(9)
});
btn0.addEventListener('click', ()=>{
    show("0")
    calcul = calcul.concat(0)
});
btn_plus.addEventListener('click', ()=>{
    show("+")
    calcul = calcul.concat("+")
});
btn_moin.addEventListener('click', ()=>{
    show("-")
    calcul = calcul.concat("-")
});
btn_fois.addEventListener('click', ()=>{
    show("*")
    calcul = calcul.concat("*")
});
btn_div.addEventListener('click', ()=>{
    show("/")
    calcul = calcul.concat("/")
});

btn_del.addEventListener('click', ()=>{
    affichage = affichage.slice(0, -1);
    calcul = calcul.slice(0, -1)
    reloadResult(affichage);
});

btn_enter.addEventListener('click', ()=>{
    calcul = calcul.join('');
    calcul = eval(calcul)
    reloadResult(calcul);
    calcul = [];
    affichage="";

});

});
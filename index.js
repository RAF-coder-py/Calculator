document.addEventListener('DOMContentLoaded', (event) => {

let affichage = "";

function showResult(valeur){
    affichage += valeur;
    document.getElementById("result").innerHTML = affichage;
}
function reloadResult(){
    document.getElementById("result").innerHTML = affichage;
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

btn1.addEventListener('click', ()=>{
    showResult("1")
})
btn2.addEventListener('click', ()=>{
    showResult("2")
})
btn3.addEventListener('click', ()=>{
    showResult("3")
})
btn4.addEventListener('click', ()=>{
    showResult("4")
})
btn5.addEventListener('click', ()=>{
    showResult("5")
})
btn6.addEventListener('click', ()=>{
    showResult("6")
})
btn7.addEventListener('click', ()=>{
    showResult("7")
})
btn8.addEventListener('click', ()=>{
    showResult("8")
})
btn9.addEventListener('click', ()=>{
    showResult("9")
})
btn0.addEventListener('click', ()=>{
    showResult("0")
})
btn_plus.addEventListener('click', ()=>{
    showResult("+")
})
btn_moin.addEventListener('click', ()=>{
    showResult("-")
})
btn_fois.addEventListener('click', ()=>{
    showResult("*")
})
btn_div.addEventListener('click', ()=>{
    showResult("/")
})
btn_del.addEventListener('click', ()=>{
    affichage = affichage.slice(0, -1);
    reloadResult();
})

})
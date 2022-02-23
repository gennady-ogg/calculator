//-- лоад
window.onload = function () {
   document.querySelector('.preloader').classList.add("preloader-remove");
};


let bodyCalc = document.querySelector('.bodyCalc');
let btn = document.querySelector('.btn');
btn.onclick = function () {
   bodyCalc.classList.toggle('light')
}

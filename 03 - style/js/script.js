console.log('You are at '+ window.location);
const Colored = document.querySelector('.colored');
console.log(Colored);
console.log(Colored.style);
let quest = prompt("Please choose color");
//Colored.style.backgroundColor = "red";
Colored.style['background-color'] = quest;
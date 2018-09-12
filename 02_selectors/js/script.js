console.log('You are at '+ window.location);
const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('MyClass');
const byId = document.getElementById('myId');
console.log(byTag, byClass, byId);
const allBySelector = document.querySelectorAll('.coolClass .mine');
console.log(byTag, byClass, byId);
const firstBySelector = document.querySelector('div');
console.log(byTag, byClass, byId, firstBySelector);
const quest = prompt("Что вы хотите написать");
byId.innerHTML = quest;
firstBySelector.innerHTML = "I am first with selector div"
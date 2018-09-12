console.log('You are at '+ window.location);
function sayHi() {return 'Hi, student!';}
document.body.innerHTML = sayHi();
function sayName(name) {
	return 'Hi, '+name;
}
 console.log(sayName('Марат'));
 console.log(sayName('Андрей'));
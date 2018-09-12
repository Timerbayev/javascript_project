console.log(this);
window.onscroll = function() {
	console.log(this);// body...
}
const button = document.querySelector('button');
button.onclick = function(){console.log(this);}
button.onclick = function(){button.innerHTML = "Pressed"}
//button.onclick = ()=>{button.innerHTML = "Pressed"}
console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


const hover = (e) => {
	e.preventDefault();
	alert('no those are my glasses, but youre cool without them!')
}


let form = document.querySelector('form#contact');
let img = document.querySelector("img");

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', hover);
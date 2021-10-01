console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form successfully submitted')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
form.addEventListener('mouseover', handleSubmit);
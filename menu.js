
const hamburguesa=document.querySelector('.header__img');
const menu=document.querySelector('.header__nav');

hamburguesa.addEventListener('click',()=>{
	menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
	if (menu.classList.contains('spread')
		&& e.target != menu && e.target != hamburguesa) {
		console.log('cerrar')
		menu.classList.toggle("spread")
	}
})




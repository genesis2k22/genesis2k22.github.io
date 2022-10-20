
const menuicon = document.querySelector('.menuicon');
const mobile_menu = document.querySelector('.mobile-menu');

menuicon.addEventListener('click', function() {
	this.classList.toggle("is-active")
	mobile_menu.classList.toggle('is-open');
})
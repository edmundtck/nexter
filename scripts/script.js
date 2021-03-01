const wrapper = document.querySelector('.wrapper');
const toggle = document.querySelector('.toggle-menu');
const navlink = document.querySelectorAll('.navbar .nav__link');

toggle.addEventListener('click', () => {
	wrapper.classList.toggle('active');
});

navlink.forEach((link) => {
	link.addEventListener('click', () => {
		if (wrapper.classList.contains('active')) {
			wrapper.classList.toggle('active');
		}
	});
});

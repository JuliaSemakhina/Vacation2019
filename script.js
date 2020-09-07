const navToggle = document.querySelector('.nav-button');
const nav = document.querySelector('.nav__list');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav--visible');
    nav.style.transition = 'transform 350ms ease';
})

nav.addEventListener('click', () => {
	nav.style.transition = '0ms';
	document.body.classList.remove('nav--visible');
})

document.querySelectorAll('.nav-item .nav-link').forEach((ele, idx)=> {
    ele.addEventListener('click', (e)=> {
        // e.preventDefault();
        document.querySelectorAll('.nav-item .active').forEach(ele => ele.classList.remove('active'));
        ele.classList.toggle('active');
    });
});

const counters = document.querySelectorAll('.counter');
const speed = 2000000;

counters.forEach(counter => {
	const updateCount = ()=> {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;

		if(count < target) {
			counter.innerText = Math.ceil(count +inc);
			setTimeout(updateCount, 150);
		} else {
			count.innerText = target;
		}
	} 
	updateCount();
})



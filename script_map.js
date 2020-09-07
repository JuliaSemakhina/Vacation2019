// Modals of the Map

const portfolioContainer = document.querySelector('.map');
portfolioContainer.addEventListener('click', e => {
	
	e.preventDefault()

	const modalToggle = e.target.closest('.map-item')

	if (! modalToggle) return 

	const modal = modalToggle.parentNode.nextElementSibling
	const closeButton = modal.querySelector('.modal-close')

	const modalOpen = _ => {
		modal.classList.add('is-open')
		modal.style.animation = 'modalIn 500ms forwards'
		document.body.style.overflowY = 'hidden'
		}


	closeButton.addEventListener('click', _ => {
		modal.style.animation = 'modalOut 500ms forwards'
		modal.addEventListener('animationend', modalClose)
		document.body.style.overflowY = 'scroll'
	})
	
	const modalClose = _ => {
		modal.classList.remove('is-open')
		modal.removeEventListener('animationend', modalClose)
	}

	document.addEventListener('keydown', e => {
		if(e.keyCode === 27) {
		modal.style.animation = 'modalOut 500ms forwards'
		modal.addEventListener('animationend', modalClose)
		}
	})

	modalOpen()


// Image Slider

const slides = modal.querySelectorAll('.slide');
const next = modal.querySelector('.next');
const prev = modal.querySelector('.prev');


function nextSlide() {
	
	const current = modal.querySelector('.current');
	current.classList.remove('.current');

	if(current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
	} else {
		slides[0].classList.add('current');
	}
	setTimeout(()=> current.classList.remove('current'));
	
}

function previousSlide() {
	const current = modal.querySelector('.current');
	current.classList.remove('.current');

	if(current.previousElementSibling) {
		current.previousElementSibling.classList.add('current');
	} else {
		slides[slides.length-1].classList.add('current');
	}
	setTimeout(()=> current.classList.remove('current'));
}

//button events


next.addEventListener('click', (e)=>{
	e.preventDefault()
	nextSlide();
});


prev.addEventListener('click', (e) => {
	previousSlide();
});


});



let markRead = document.querySelector('#mark')
let redDot = document.querySelectorAll('.new-notif')
let activeCard = document.getElementsByClassName('card')
let notificationNumber = document.querySelector('.number')

markRead.addEventListener('click', () => {
	;[...activeCard].forEach((element) => {
		element.classList.remove('active')
	})
	;[...redDot].forEach((element) => {
		element.classList.add('none')
	})
	notificationNumber.innerHTML = 0
})

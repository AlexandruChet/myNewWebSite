const menuButton = document.getElementById('btn-menu')
const menu = document.getElementById('navigation')

function burgerMenu() {
	menuButton.classList.toggle('open-birger-menu')
	if (menu.style.display === 'none') {
		menu.style.display = 'flex'
	} else {
		menu.style.display = 'none'
	}
}

menuButton.addEventListener('click', burgerMenu)

const userNameInput = document.getElementById('nameUserInput')
const genderUserInput = document.getElementById('genderUserInput')
const heightUserInput = document.getElementById('heightUserInput')
const weightUserInput = document.getElementById('weightUserInput')

const userName = document.getElementById('nameUser')
const genderUser = document.getElementById('genderUser')
const heightUser = document.getElementById('heightUser')
const weightUser = document.getElementById('weightUser')

userNameInput.addEventListener('input', () => {
	userName.textContent = userNameInput.value
})

genderUserInput.addEventListener('input', () => {
	genderUser.textContent = genderUserInput.value
})

heightUserInput.addEventListener('input', () => {
	heightUser.textContent = heightUserInput.value
})

weightUserInput.addEventListener('input', () => {
	weightUser.textContent = weightUserInput.value
})

const firstUserName = document.getElementById('firstUserName')
const firstUserGender = document.getElementById('firstUserGender')
const firstUserHeight = document.getElementById('firstUserHeight')
const firstUserWeight = document.getElementById('firstUserWeight')

userNameInput.addEventListener('input', () => {
	firstUserName.textContent = userNameInput.value
})

genderUserInput.addEventListener('input', () => {
	firstUserGender.textContent = genderUserInput.value
})

heightUserInput.addEventListener('input', () => {
	firstUserHeight.textContent = heightUserInput.value
})

weightUserInput.addEventListener('input', () => {
	firstUserWeight.textContent = weightUserInput.value
})

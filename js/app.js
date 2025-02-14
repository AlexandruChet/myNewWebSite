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

const firstUserName = document.getElementById('firstUserName')
const firstUserGender = document.getElementById('firstUserGender')
const firstUserHeight = document.getElementById('firstUserHeight')
const firstUserWeight = document.getElementById('firstUserWeight')

function pluseText(element, text) {
	element.addEventListener('input', () => {
		text.textContent = element.value
        console.log(text);
	})
}

pluseText(userNameInput, userName)
pluseText(genderUserInput, genderUser)
pluseText(heightUserInput, heightUser)
pluseText(weightUserInput, weightUser)

pluseText(userNameInput, firstUserName)
pluseText(genderUserInput, firstUserGender)
pluseText(heightUserInput, firstUserHeight)
pluseText(weightUserInput, firstUserWeight)

const btnOpenP = document.getElementById('btnOpenP')
const openTextRegulations = document.getElementById('openText')

btnOpenP.addEventListener('click', () => {
	if (openTextRegulations.style.display === 'none') {
		openTextRegulations.style.display = 'block'
	} else {
		openTextRegulations.style.display = 'none'
	}
})
const btnOpenResult = document.getElementById('btn_open')
const innerText = document.getElementById('open-text')

btnOpenResult.addEventListener('click', () => {
	const height = parseFloat(heightUserInput.value)
	const weight = parseFloat(weightUserInput.value)
	const idealWeight = height - 110
	if (innerText.style.display === 'none') {
		innerText.style.display = 'block'
	} else {
		innerText.style.display = 'none'
	}

	if (weight === idealWeight) {
		innerText.textContent = 'Ваша вага ідеальна'
	} else if (weight < idealWeight) {
		innerText.textContent = 'Ви занадто худий'
	} else {
		innerText.textContent = 'Вам було би непогано схуднути'
	}
})


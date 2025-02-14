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
		console.log(text)
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

const cardContainerContent = document.querySelector('.card-container')

const traning = [
	{
		name: `Планка`,
		description: `Статична вправа для зміцнення преса, спини та плечей. Виконуйте 30-60 секунд.`,
		img: `images/logo.svg`,
	},
	{
		name: `Берпі`,
		description: `Інтенсивна вправа для спалювання калорій і тренування всього тіла. Виконуйте 10-15 разів.`,
		img: `images/logo.svg`,
	},
	{
		name: `Скручування`,
		description: `Класична вправа для преса. Виконуйте 20-25 повторів.`,
		img: `images/logo.svg`,
	},
	{
		name: `Присідання`,
		description: `Вправа для м'язів ніг та сідниць. Виконуйте 15-20 повторів.`,
		img: `images/logo.svg`,
	},
	{
		name: `Випади`,
		description: `Вправа для зміцнення ніг і сідниць. Виконуйте 10-15 разів на кожну ногу.`,
		img: `images/logo.svg`,
	},
	{
		name: `Віджимання`,
		description: `Вправа для грудних м'язів, трицепсів і плечей. Виконуйте 15-20 разів.`,
		img: `images/logo.svg`,
	},
	{
		name: `Скакалка`,
		description: `Кардіо-вправа для спалювання калорій. Стрибати 1-2 хвилини.`,
		img: `images/logo.svg`,
	},
	{
		name: `Місток`,
		description: `Вправа для сідниць і нижньої частини спини. Виконуйте 20-25 разів.`,
		img: `images/logo.svg`,
	},
	{
		name: `Альпініст`,
		description: `Динамічна вправа для преса і кардіо. Виконуйте 30-45 секунд.`,
		img: `images/logo.svg`,
	},
	{
		name: `Бічна планка`,
		description: `Вправа для косих м'язів живота. Виконуйте по 30-45 секунд на кожну сторону.`,
		img: `images/logo.svg`,
	},
]

let cardsHTML = ''
traning.forEach((element) => {
	cardsHTML += `
    <div class="card">
      <img src="${element.img}" alt="${element.name}">
      <h3>${element.name}</h3>
      <p>${element.description}</p>
      <button class="btn-delete">Я виконав ці вправи</button>
    </div>`
})

cardContainerContent.innerHTML = cardsHTML

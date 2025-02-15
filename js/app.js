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
const cardContainerContent = document.querySelector('.card-container')
const eatContainer = document.getElementById('eat-container')

function functionWeightLoss() {
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

		cardContainerContent.innerHTML = cardsHTML
	})
}

function functionMuscle() {
	const muscleTraining = [
		{
			name: `Присідання з вагою`,
			description: `Базова силова вправа для м'язів ніг, сідниць і корпусу. Виконуйте 8-12 повторів з гантелями або штангою.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Жим гантелей лежачи`,
			description: `Ефективна вправа для нарощування грудних м'язів і трицепсів. Зробіть 8-10 повторів з помірною вагою.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Тяга гантелі до поясу`,
			description: `Відмінна вправа для зміцнення спини та біцепсів. Виконуйте 8-12 повторів на кожну руку.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Віджимання на брусах`,
			description: `Розвиває грудні м'язи, плечі і трицепси. Виконуйте 6-10 повторів з додатковою вагою, якщо можливо.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Румунська станова тяга`,
			description: `Вправа для біцепсів стегна, сідниць і спини. Зробіть 8-12 повторів з гантелями або штангою.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Підтягування широким хватом`,
			description: `Розвиває спину, біцепси та плечі. Виконуйте 5-10 повторів, додаючи вагу при необхідності.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Жим плечима гантелей`,
			description: `Вправа для дельтоподібних м'язів. Зробіть 10-12 повторів з помірною вагою.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Підйом на біцепс`,
			description: `Класична вправа для біцепсів. Виконуйте 8-12 повторів з гантелями або штангою.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Французький жим`,
			description: `Ізольована вправа для трицепсів. Зробіть 8-12 повторів з гантелею або штангою EZ.`,
			img: `/images/logo.svg`,
		},
		{
			name: `Планка з вагою`,
			description: `Зміцнює корпус і м'язи стабілізатори. Тримайте 30-60 секунд з додатковою вагою на спині.`,
			img: `/images/logo.svg`,
		},
	]
	let cardsHTML = ''
	muscleTraining.forEach((element) => {
		cardsHTML += `
    <div class="card">
      <img src="${element.img}" alt="${element.name}">
      <h3>${element.name}</h3>
      <p>${element.description}</p>
      <button class="btn-delete">Я виконав ці вправи</button>
    </div>`
		cardContainerContent.innerHTML = cardsHTML
	})
}

function eatWeightLoss() {
	const foodForWeightLoss = [
		{
			name: `Авокадо`,
			description: `Поживний продукт з корисними жирами, що сприяє відчуттю ситості.`,
			img: `images/logo.svg`,
		},
		{
			name: `Куряче філе`,
			description: `Багате на білок м'ясо, яке допомагає нарощувати м'язи та зберігати енергію.`,
			img: `images/logo.svg`,
		},
		{
			name: `Овсянка`,
			description: `Складний вуглевод, що забезпечує довготривале відчуття ситості.`,
			img: `images/logo.svg`,
		},
		{
			name: `Броколі`,
			description: `Низькокалорійний овоч, багатий на клітковину та вітаміни.`,
			img: `images/logo.svg`,
		},
		{
			name: `Яйця`,
			description: `Джерело білка та корисних жирів для підтримки енергії.`,
			img: `images/logo.svg`,
		},
		{
			name: `Мигдаль`,
			description: `Горіх, що містить корисні жири та підтримує відчуття ситості.`,
			img: `images/logo.svg`,
		},
		{
			name: `Гречка`,
			description: `Корисна крупа з високим вмістом білка та заліза.`,
			img: `images/logo.svg`,
		},
		{
			name: `Йогурт без цукру`,
			description: `Продукт, багатий на пробіотики, що підтримують здоров’я травлення.`,
			img: `images/logo.svg`,
		},
		{
			name: `Лосось`,
			description: `Риба, багата на омега-3 кислоти, які корисні для серця.`,
			img: `images/logo.svg`,
		},
		{
			name: `Огірки`,
			description: `Низькокалорійний овоч, що чудово зволожує організм.`,
			img: `images/logo.svg`,
		},
	]
	let cardsSecondlyHTML = ''
	foodForWeightLoss.forEach((element) => {
		cardsSecondlyHTML += `
    <div class="card-eat">
      <h3>${element.name}</h3>
      <p>${element.description}</p>
      <button class="btn-delete">Я почав їсти корисну для мене їжу</button>
	  <img src="${element.img}" alt="${element.name}">
    </div>`
		eatContainer.innerHTML = cardsSecondlyHTML
	})
}

btnOpenResult.addEventListener('click', () => {
	const height = parseFloat(heightUserInput.value)
	const weight = parseFloat(weightUserInput.value)
	const idealWeight = height - 110
	let resultBody
	if (innerText.style.display === 'none') {
		innerText.style.display = 'block'
	} else {
		innerText.style.display = 'none'
	}

	if (weight === idealWeight) {
		innerText.textContent = 'Ваша вага ідеальна'
		resultBody = 'ideal'
		functionMuscle()
	} else if (weight < idealWeight) {
		innerText.textContent = 'Ви занадто худий'
		resultBody = 'Вправи на нарощення мускул'
		functionMuscle()
		cardContainerContent.classList.toggle('container')
	} else if (weight > idealWeight) {
		innerText.textContent = 'Вам було би непогано схуднути'
		resultBody = 'Вправи на похудання'
		functionWeightLoss()
		eatWeightLoss()
		cardContainerContent.classList.toggle('container')
		eatContainer.classList.toggle('container')
	}
})

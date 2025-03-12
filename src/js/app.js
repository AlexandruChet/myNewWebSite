const menuButton = document.getElementById("btn-menu");
const menu = document.getElementById("navigation");

function burgerMenu() {
  menuButton.classList.toggle("open-birger-menu");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

menuButton.addEventListener("click", burgerMenu);

let userNameInput = document.getElementById("nameUserInput");
let genderUserInput = document.getElementById("genderUserInput");
let heightUserInput = document.getElementById("heightUserInput");
let weightUserInput = document.getElementById("weightUserInput");

let userName = document.getElementById("nameUser");
let genderUser = document.getElementById("genderUser");
let heightUser = document.getElementById("heightUser");
let weightUser = document.getElementById("weightUser");

let firstUserName = document.getElementById("firstUserName");
let firstUserGender = document.getElementById("firstUserGender");
let firstUserHeight = document.getElementById("firstUserHeight");
let firstUserWeight = document.getElementById("firstUserWeight");

function pluseText(element, text) {
  element.addEventListener("input", () => {
    text.textContent = element.value;
    console.log(`Це ваші данні ${text.textContent}`);
  });
}

pluseText(userNameInput, userName);
pluseText(genderUserInput, genderUser);
pluseText(heightUserInput, heightUser);
pluseText(weightUserInput, weightUser);

pluseText(userNameInput, firstUserName);
pluseText(genderUserInput, firstUserGender);
pluseText(heightUserInput, firstUserHeight);
pluseText(weightUserInput, firstUserWeight);

const btnOpenP = document.getElementById("btnOpenP");
const openTextRegulations = document.getElementById("openText");

btnOpenP.addEventListener("click", () => {
  if (openTextRegulations.style.display === "none") {
    openTextRegulations.style.display = "block";
  } else {
    openTextRegulations.style.display = "none";
  }
});

const btnOpenResult = document.getElementById("btn_open");
const innerText = document.getElementById("open-text");
const cardContainerContent = document.querySelector(".card-container");
const eatContainer = document.getElementById("eat-container");

const traning = [
  {
    name: `Планка`,
    description: `Статична вправа для зміцнення преса, спини та плечей. Виконуйте 30-60 секунд.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Берпі`,
    description: `Інтенсивна вправа для спалювання калорій і тренування всього тіла. Виконуйте 10-15 разів.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Скручування`,
    description: `Класична вправа для преса. Виконуйте 20-25 повторів.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Присідання`,
    description: `Вправа для м'язів ніг та сідниць. Виконуйте 15-20 повторів.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Випади`,
    description: `Вправа для зміцнення ніг і сідниць. Виконуйте 10-15 разів на кожну ногу.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Віджимання`,
    description: `Вправа для грудних м'язів, трицепсів і плечей. Виконуйте 15-20 разів.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Скакалка`,
    description: `Кардіо-вправа для спалювання калорій. Стрибати 1-2 хвилини.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Місток`,
    description: `Вправа для сідниць і нижньої частини спини. Виконуйте 20-25 разів.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Альпініст`,
    description: `Динамічна вправа для преса і кардіо. Виконуйте 30-45 секунд.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Бічна планка`,
    description: `Вправа для косих м'язів живота. Виконуйте по 30-45 секунд на кожну сторону.`,
    img: `images/logo.svg`,
    calories: 0.1,
  },
];

const muscleTraining = [
  {
    name: `Присідання з вагою`,
    description: `Базова силова вправа для м'язів ніг, сідниць і корпусу. Виконуйте 8-12 повторів з гантелями або штангою.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Жим гантелей лежачи`,
    description: `Ефективна вправа для нарощування грудних м'язів і трицепсів. Зробіть 8-10 повторів з помірною вагою.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Тяга гантелі до поясу`,
    description: `Відмінна вправа для зміцнення спини та біцепсів. Виконуйте 8-12 повторів на кожну руку.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Віджимання на брусах`,
    description: `Розвиває грудні м'язи, плечі і трицепси. Виконуйте 6-10 повторів з додатковою вагою, якщо можливо.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Румунська станова тяга`,
    description: `Вправа для біцепсів стегна, сідниць і спини. Зробіть 8-12 повторів з гантелями або штангою.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Підтягування широким хватом`,
    description: `Розвиває спину, біцепси та плечі. Виконуйте 5-10 повторів, додаючи вагу при необхідності.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Жим плечима гантелей`,
    description: `Вправа для дельтоподібних м'язів. Зробіть 10-12 повторів з помірною вагою.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Підйом на біцепс`,
    description: `Класична вправа для біцепсів. Виконуйте 8-12 повторів з гантелями або штангою.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Французький жим`,
    description: `Ізольована вправа для трицепсів. Зробіть 8-12 повторів з гантелею або штангою EZ.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
  {
    name: `Планка з вагою`,
    description: `Зміцнює корпус і м'язи стабілізатори. Тримайте 30-60 секунд з додатковою вагою на спині.`,
    img: `/images/logo.svg`,
    calories: 0.1,
  },
];

const foodForWeightLoss = [
  {
    name: `Авокадо`,
    description: `Поживний продукт з корисними жирами, що сприяє відчуттю ситості.`,
    img: `images/logo.svg`,
    calories: 16,
  },
  {
    name: `Куряче філе`,
    description: `Багате на білок м'ясо, яке допомагає нарощувати м'язи та зберігати енергію.`,
    img: `images/logo.svg`,
    calories: 0.165,
  },
  {
    name: `Овсянка`,
    description: `Складний вуглевод, що забезпечує довготривале відчуття ситості.`,
    img: `images/logo.svg`,
    calories: 68,
  },
  {
    name: `Броколі`,
    description: `Низькокалорійний овоч, багатий на клітковину та вітаміни.`,
    img: `images/logo.svg`,
    calories: 34,
  },
  {
    name: `Яйця`,
    description: `Джерело білка та корисних жирів для підтримки енергії.`,
    img: `images/logo.svg`,
    calories: 7,
  },
  {
    name: `Мигдаль`,
    description: `Горіх, що містить корисні жири та підтримує відчуття ситості.`,
    img: `images/logo.svg`,
    calories: 0.579,
  },
  {
    name: `Гречка`,
    description: `Корисна крупа з високим вмістом білка та заліза.`,
    img: `images/logo.svg`,
    calories: 343,
  },
  {
    name: `Йогурт без цукру`,
    description: `Продукт, багатий на пробіотики, що підтримують здоров’я травлення.`,
    img: `images/logo.svg`,
    calories: 75,
  },
  {
    name: `Лосось`,
    description: `Риба, багата на омега-3 кислоти, які корисні для серця.`,
    img: `images/logo.svg`,
    calories: 206,
  },
  {
    name: `Огірки`,
    description: `Низькокалорійний овоч, що чудово зволожує організм.`,
    img: `images/logo.svg`,
    calories: 16,
  },
];

const foodForMuscle = [
  {
    name: `Яловичина (пісна)`,
    description: `Багата на білок, залізо та креатин. Містить цинк для підтримки рівня тестостерону.`,
    img: `images/logo.svg`,
    calories: 0.25,
  },
  {
    name: `Тунець`,
    description: `Високий вміст білка та омега-3. Підтримує здоров’я суглобів і відновлення.`,
    img: `images/logo.svg`,
    calories: 0.132,
  },
  {
    name: `Арахісова паста (без цукру)`,
    description: `Джерело білка, корисних жирів та вуглеводів. Підходить як енергетична закуска.`,
    img: `images/logo.svg`,
    calories: 0.598,
  },
  {
    name: `Сир (творог)`,
    description: `Містить казеїновий білок, який живить м’язи протягом ночі. Багатий кальцієм.`,
    img: `images/logo.svg`,
    calories: 0.98,
  },
  {
    name: `Банани`,
    description: `Джерело швидких вуглеводів для енергії. Допомагають поповнити запаси глікогену.`,
    img: `images/logo.svg`,
    calories: 0.89,
  },
  {
    name: `Чіа та льон`,
    description: `Містять омега-3, клітковину та білок. Покращують відновлення м’язів.`,
    img: `images/logo.svg`,
    calories: 0.486,
  },
  {
    name: `Шпинат`,
    description: `Багатий залізом, магнієм та нітратами, які підвищують витривалість.`,
    img: `images/logo.svg`,
    calories: 0.23,
  },
  {
    name: `Батат (солодка картопля)`,
    description: `Джерело повільних вуглеводів та клітковини. Підтримує енергію на тренуваннях.`,
    img: `images/logo.svg`,
    calories: 0.86,
  },
  {
    name: `Протеїнові коктейлі`,
    description: `Швидкий спосіб отримати білок. Ідеальний варіант після тренувань.`,
    img: `images/logo.svg`,
    calories: 0.12,
  },
  {
    name: `Часник`,
    description: `Підвищує рівень тестостерону та знижує кортизол. Покращує кровообіг.`,
    img: `images/logo.svg`,
    calories: 0.149,
  },
];

function functionWeightLoss(element) {
  let cardsHTML = "";
  element.forEach((element) => {
    cardsHTML += `
    <div class="card">
      <img src="${element.img}" alt="${element.name}">
      <h3>${element.name}</h3>
      <p>${element.description}</p>
      <button class="btn-delete">Я виконав ці вправи</button>
    </div>`;
    cardContainerContent.innerHTML = cardsHTML;
  });
  const btnDeleteEat = document.querySelectorAll(".btn-delete");
  btnDeleteEat.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const selectedFood = element[index];
      const currentWeight = parseFloat(weightUserInput.value);
      const containerResult = currentWeight - selectedFood.calories;
      weightUserInput.value = containerResult.toFixed(2);
      weightUser.textContent = containerResult.toFixed(2);
    });
  });
}

function eatWeightLoss(element) {
  let cardsSecondlyHTML = "";
  element.forEach((item) => {
    cardsSecondlyHTML += `
    <div class="card-eat">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <button class="btn-eat-delete">Я почав їсти корисну для мене їжу</button>
	  <img src="${item.img}" alt="${item.name}">
    </div>`;
  });
  eatContainer.innerHTML = cardsSecondlyHTML;

  const btnDeleteEat = document.querySelectorAll(".btn-eat-delete");
  btnDeleteEat.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const selectedFood = element[index];
      const currentWeight = parseFloat(weightUserInput.value);
      const containerResult = currentWeight + selectedFood.calories;
      weightUserInput.value = containerResult.toFixed(2);
      weightUser.textContent = containerResult.toFixed(2);
    });
  });
}

btnOpenResult.addEventListener("click", () => {
  const height = parseFloat(heightUserInput.value);
  const weight = parseFloat(weightUserInput.value);
  const idealWeight = height - 110;
  let resultBody;
  if (innerText.style.display === "none") {
    innerText.style.display = "block";
  } else {
    innerText.style.display = "none";
  }

  if (weight === idealWeight) {
    innerText.textContent = "Ваша вага ідеальна";
    resultBody = "ideal";
    functionWeightLoss(muscleTraining);
    eatWeightLoss(foodForMuscle);
  } else if (weight < idealWeight) {
    innerText.textContent = "Ви занадто худий";
    resultBody = "Вправи на нарощення мускул";
    functionWeightLoss(muscleTraining);
    cardContainerContent.classList.toggle("container");
    eatWeightLoss(foodForMuscle);
  } else if (weight > idealWeight) {
    innerText.textContent = "Вам було би непогано схуднути";
    resultBody = "Вправи на похудання";
    functionWeightLoss(traning);
    eatWeightLoss(foodForWeightLoss);
    cardContainerContent.classList.toggle("container");
    eatContainer.classList.toggle("container");
  }
});
class User {
  constructor(gender, height, weight) {
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }
  set userName(value) {
    const firstLatter = value[0].toUpperCase();
    const fromSecondLetter = value.slice(1).toLowerCase();
    this._userName = `${firstLatter}${fromSecondLetter}`;
  }
  get userName() {
    return this._userName;
  }
}

const myNameStatt = document.querySelector(".myName");
const myGenderStatt = document.querySelector(".myGender");
const myHeightStatt = document.querySelector(".myHeight");
const myWeightStatt = document.querySelector(".myWeight");
const save = document.querySelector(".save");

save.addEventListener("click", () => {
  const You = new User(
    genderUserInput.value,
    heightUserInput.value,
    weightUserInput.value
  );
  You.userName = userNameInput.value;
  myNameStatt.textContent = You.userName;
  myGenderStatt.textContent = You.gender;
  myHeightStatt.textContent = You.height;
  myWeightStatt.textContent = You.weight;
});

const modalWindow = document.querySelector(".modal-window");
const openModalBtn = document.querySelector(".open-modal-window");
const closeModalBtn = document.querySelector(".close-modal-button");

openModalBtn.addEventListener("click", () => {
  modalWindow.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modalWindow.style.display = "none";
});

const btnOpenMoreInfo = document.getElementById("btn-event");
const contentInfo = document.querySelector(".dropdown-container");

btnOpenMoreInfo.addEventListener("click", () => {
  contentInfo.classList.toggle("active");
});

const btnNext = document.getElementById("next-button");
const btnBefore = document.getElementById("before-button");
const gallery = document.querySelector(".gallery");

btnNext.addEventListener("click", () => {
  gallery.scrollLeft += 100;
});

btnBefore.addEventListener("click", () => {
  gallery.scrollLeft -= 100;
});

document.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelector(".headline_footer");
  const menuButton = document.querySelector(".btn-click-footer");

  menuButton.addEventListener("click", () => {
    if (getComputedStyle(headline).display === "none") {
      headline.style.display = "block";
    } else {
      headline.style.display = "none";
    }
  });
});

const questions = document.querySelectorAll(".question");

questions.forEach((element) => {
  element.addEventListener("click", function () {
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

const password = document.getElementById("password-input");
const btnPassword = document.getElementById("btn-submit");

btnPassword.addEventListener("click", () => {
  if (password.value.length < 6) {
    alert("Введіть пароль із 6 символів");
  } else if (password.value.length > 6) {
    alert("Введіть пароль із 6 символів");
  } else {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const newPas = Array.from(
      { length: 6 },
      () => letters[Math.floor(Math.random() * letters.length)]
    );

    console.log(
      `Зашифрований пароль: ${newPas}, реальний пароль: ${password.value}`
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const modalWindowCapcha = document.querySelector(".modal-window-capcha");
  const btnCloseCapcha = document.querySelector(".btn-close-capcha");
  const textCapcha = document.getElementById("textareaCapcha");

  modalWindowCapcha.classList.add("active");

  modalWindowCapcha.style.position = "flex";

  btnCloseCapcha.addEventListener("click", () => {
    if (textCapcha.value.trim() === "336") {
      modalWindowCapcha.style.display = "none";
      modalWindowCapcha.classList.remove("active");
    } else {
      alert("Введіть капчу правильно, якщо ви не робот");
    }
  });
});

const btns = document.querySelectorAll(".btn-fitness");

btns.forEach((element) => {
  element.addEventListener("click", () => {
    const containerFitness = element.nextElementSibling;
    if (containerFitness.style.display === "none") {
      setTimeout(() => {
        containerFitness.style.display = "block";
      }, 400);
    } else {
      setTimeout(() => {
        containerFitness.style.display = "none";
      }, 400);
    }
  });
});

const btnClickGame = document.getElementById("click-btn");
const clickerText = document.getElementById("click-message");
const muscleImg = document.getElementById("muscle-img");
let count = 0;

btnClickGame.addEventListener("click", () => {
  count++;
  clickerText.textContent = count;

  if (count === 1) {
    muscleImg.src = "/images/fitess-run.jpg";
  } else if (count === 7) {
    muscleImg.src = "/images/img-fitness-strong.jfif";
  } else if (count === 30) {
    muscleImg.src = "/images/fitness-muscle.avif";
  } else if (count === 50) {
    muscleImg.src = "/images/muscle.jpg";
  } else if (count === 80) {
    muscleImg.src = "/images/body-muscle.jfif";
  } else if (count === 100) {
    muscleImg.src = "/images/arnold.jfif";
  }
});

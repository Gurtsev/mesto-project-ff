// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

let arr = document.querySelectorAll("");

function addCard() {
  const cardTemplate = document.querySelector("#card-template").content;
  const pageList = document.querySelector(".places__list");
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src =
    "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg";
  cardElement.querySelector(".card__title").textContent = "Архыз";

  pageList.append(cardElement);
}

function createCards() {
  for (let i = 0; i < 6; i++) {
    addCard();
  }
}

createCards();

import '../src/pages/index.css';

const arkhyzImage = new URL("./images/card_1.jpg", import.meta.url);
const сhelyabinskRegionImage = new URL("./images/card_2.jpg", import.meta.url);
const ivanovoImage = new URL("./images/card_3.jpg", import.meta.url);


const initialCards = [
    {
      name: "Архыз",
      link: arkhyzImage,
    },
    {
      name: "Челябинская область",
      link: сhelyabinskRegionImage,
    },
    {
      name: "Иваново",
      link: ivanovoImage,
    },
];

const cardTemplate = document.querySelector('#card-template').content;
const placesCard = document.querySelector('.places__list'); 

const createCard = (card, deleteCard) => { 
  
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDelete = cardElement.querySelector('.card__delete-button');
  
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  cardDelete.addEventListener('click', () => {
      deleteCard(cardElement);
  });
  
  return cardElement;
}

 const removeCard = (cardElement) => {
  cardElement.remove();
}

initialCards.forEach((item) => {
  const card = createCard(item, removeCard);
  placesCard.append(card);
});



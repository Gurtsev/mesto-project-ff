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
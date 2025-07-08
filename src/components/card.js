export { createCard, likeCard, deleteCard};

function createCard({
    cardInit, 
    deleteFunction, 
    onCardClickFunction, 
    likeFunction
    }
) {
    const cardTemplate = document.querySelector('#card-template').content;
    const elementForClone = cardTemplate.querySelector('.places__item');
    const cardElement = elementForClone.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    cardElement.querySelector('.card__title').textContent = cardInit.name;
    cardImage.src = cardInit.link;
    cardImage.alt = cardInit.name;

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', (evt) => {
        likeFunction(evt.target);
    });

    deleteButton.addEventListener('click', (evt) => {
        deleteFunction(evt.target);
    });

    cardImage.addEventListener('click', () =>
        onCardClickFunction(cardInit.name, cardInit.link));
    return cardElement;
}

function likeCard (evt) {
    evt.classList.toggle("card__like-button_is-active");
}

function deleteCard(delButton) {
    const listItem = delButton.closest('.card');
    listItem.remove()    
}
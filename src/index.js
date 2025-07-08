import '../src/pages/index.css';
import { initialCards } from "../src/components/cards.js";
import { closePopup, openPopup, setModalWindowEventListeners } from "../src/components/modal.js";
import { createCard, likeCard, deleteCard } from "../src/components/card.js";

// Переменные для редактирования профиля
const formEditProfile = document.querySelector('[name="edit-profile"]')
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_description');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Расположение
const formNewPlace = document.querySelector('[name="new-place"]')
const cardNameInput = formNewPlace.querySelector('.popup__input_type_card-name');
const urlInput = formNewPlace.querySelector('.popup__input_type_url');

const imagePopup =   document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

const placesList = document.querySelector('.places__list');


//  Показать все карты
initialCards.forEach(function (cardInit) {
    renderCard(cardInit, "append");
});

const addButton =  document.querySelector('.profile__add-button');
const addPopup =   document.querySelector('.popup_type_new-card');
addButton.addEventListener('click', () => openPopup(addPopup, null));

const editButton =  document.querySelector('.profile__edit-button');
const editPopup =   document.querySelector('.popup_type_edit');
editButton.addEventListener('click', () => openPopup(editPopup, openEditPopup));

formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit); 

const popUps = document.querySelectorAll(".popup");
popUps.forEach(setModalWindowEventListeners);



function openEditPopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(editPopup);
}

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value; 
    closePopup(editPopup);
}

formEditProfile.addEventListener('submit', handleEditFormSubmit); 

function openCardPopup( title, link) {
    popupImage.src = link;
    popupImage.alt = title;
    popupCaption.textContent = title;

    openPopup(imagePopup, null);
}


// Функция добавления новой карты
function handleNewPlaceFormSubmit(evt) {
    evt.preventDefault();

    let newCard = {};
    newCard.name = cardNameInput.value;
    newCard.link =  urlInput.value
    renderCard(newCard);

    formNewPlace.reset();

    closePopup(addPopup);
}

function renderCard(item, method = "prepend") {
    placesList[ method ](
        createCard(
            {
                cardInit: item,
                deleteFunction : deleteCard,
                onCardClickFunction: openCardPopup,
                likeFunction: likeCard
            }
        )
    );
}







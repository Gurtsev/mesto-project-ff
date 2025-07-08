import '../src/pages/index.css';
import { initialCards } from "../src/components/cards.js";
import { closePopup, openPopup, setModalWindowEventListeners } from "../src/components/modal.js";
import { createCard, likeCard, deleteCard } from "../src/components/card.js";

const formEditProfile = document.querySelector('[name="edit-profile"]')
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formNewPlace = document.querySelector('[name="new-place"]')
const cardNameInput = formNewPlace.querySelector('.popup__input_type_card-name');
const urlInput = formNewPlace.querySelector('.popup__input_type_url');
const imagePopup =   document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');
const placesList = document.querySelector('.places__list');
const addButton =  document.querySelector('.profile__add-button');
const addPopup =   document.querySelector('.popup_type_new-card');
const editButton =  document.querySelector('.profile__edit-button');
const editPopup =   document.querySelector('.popup_type_edit');
const popUps = document.querySelectorAll(".popup");

initialCards.forEach(function (cardInit) { 
    renderCard(cardInit, "append");
});

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
 
function openCardPopup( title, link) {
    popupImage.src = link;
    popupImage.alt = title;
    popupCaption.textContent = title;
    openPopup(imagePopup, null);
}

function handleNewPlaceFormSubmit(evt) {
    evt.preventDefault();
    let newCard = {};
    newCard.name = cardNameInput.value;
    newCard.link =  urlInput.value
    renderCard(newCard);
    closePopup(addPopup);
    formNewPlace.reset();
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

addButton.addEventListener('click', () => openPopup(addPopup, null)); 
editButton.addEventListener('click', openEditPopup);
formEditProfile.addEventListener('submit', handleEditFormSubmit);
formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit); 
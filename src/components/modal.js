export {closePopup, openPopup};

export const setModalWindowEventListeners = (modalWindow) => {
    // Добавляем анимацию модальному окну 
    modalWindow.classList.add("popup_is-animated");

    // Добавляем обработчик события на кнопку закрытия
    const closeCross = modalWindow.querySelector('.popup__close');
    closeCross.addEventListener('click', () => {closePopup(modalWindow);

    });

    //  Обработчик события для оверлея
    modalWindow.addEventListener('click', (event) => { 
        if (!event.target.classList.contains(".popup__content")) {
            closePopup(event.target);
        }   
    });
};

function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", handleEscClose);
}

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscClose);
    const form = popup.querySelector('.popup__form');
    if (form) {
        form.reset();
    }
}

function handleEscClose(evt) {
    if (evt.key === "Escape") {
            
        const openedPopup = document.querySelector(".popup_is-opened");

        if (openedPopup)  {
            closePopup(openedPopup);
        }
         
    }
}





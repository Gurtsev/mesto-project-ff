/*import arkhyzImage from "../images/card_1.jpg";
import сhelyabinskRegionImage from "../images/card_2.jpg";
import ivanovoImage from "../images/card_3.jpg"; */

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


/* {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    } */


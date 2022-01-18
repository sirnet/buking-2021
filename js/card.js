
const templateFragment = document.querySelector('#card').content.querySelector('.popup');

const typeLodging = (e) => {
  switch (e) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      null;
  }
}

const unloadFeatures = (e) => {
  let values;
  e.forEach((value, index) => {
    if (values === undefined) {
      values = value;
    } else {
      values = values + value;
    }
    if(index != e.length-1){
      values = values + ', ';
    }
  });
  return values;
};

const formAds = ({title, price, type, rooms, guests, checkin, checkout, features, description, photos}, {avatar}, {lat, lng}) => {
  const wizardElement = templateFragment.cloneNode(true);
  wizardElement.querySelector('.popup__title').textContent = title;
  wizardElement.querySelector('.popup__text--address').textContent = lat + ' | ' + lng;
  wizardElement.querySelector('.popup__text--price').textContent = price;
  wizardElement.querySelector('.popup__type').textContent = typeLodging(type);
  wizardElement.querySelector('.popup__text--capacity').textContent = rooms + ' комнаты(а) для ' + guests + ' гостей(я)';
  wizardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin + ' , выезд до ' + checkout;
  if(features){
    let featuresElement = wizardElement.querySelectorAll('.popup__feature');
    featuresElement.forEach((value) => {
      value.remove();
    });
    features.forEach((value) => {
      const newElement = document.createElement('li');
      newElement.classList.add('popup__feature');
      newElement.classList.add('popup__feature--' + value);
      wizardElement.querySelector('.popup__features').appendChild(newElement);
    });
  }
  wizardElement.querySelector('.popup__description').textContent = description;
  wizardElement.querySelector('.popup__photo').remove();
  if(photos) {
    photos.forEach((value) => {
      const newElement = document.createElement('img');
      newElement.src = value;
      newElement.classList.add('popup__photo');
      newElement.width = "45";
      newElement.height = "40";
      wizardElement.querySelector('.popup__photos').appendChild(newElement);
    });
  }

  if(avatar) {
    wizardElement.querySelector('.popup__avatar').src = avatar;
  } else {
    wizardElement.querySelector('.popup__avatar').remove();
  }
  return wizardElement;
};

export {formAds};

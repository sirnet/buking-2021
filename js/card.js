
const templateFragment = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');

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
}

const formAds = ({title, lat,lng, price, type, rooms, guests, checkin, checkout, features, description, photos}, {avatar}) => {
  const wizardElement = templateFragment.cloneNode(true);
  wizardElement.querySelector('.popup__title').textContent = title;
  wizardElement.querySelector('.popup__text--address').textContent = lat + ' | ' + lng;
  wizardElement.querySelector('.popup__text--price').textContent = price;
  wizardElement.querySelector('.popup__type').textContent = typeLodging(type);
  wizardElement.querySelector('.popup__text--capacity').textContent = rooms + ' комнаты(а) для ' + guests + ' гостей(я)';
  wizardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin + ' , выезд до ' + checkout;
  //wizardElement.querySelector('.popup__features').textContent = unloadFeatures(features);
  wizardElement.querySelector('.popup__description').textContent = description;
  //wizardElement.querySelector('.popup__photo').src = photos[0];
  wizardElement.querySelector('.popup__avatar').src = avatar;
  return wizardElement;
};

//preparedAds.forEach((e) => {
  //const wizardElement = formAds(preparedAds[0].offer, preparedAds[0].author);
  //mapCanvas.appendChild(wizardElement);
//});

export {formAds};

import {createAds} from './data.js';

const templateFragment = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');

const cardTitle = templateFragment.querySelector('.popup__title');

const preparedAds = createAds();





preparedAds.forEach((e) => {
  console.log(e);
  const wizardElement = templateFragment.cloneNode(true);
  wizardElement.querySelector('.popup__title').textContent = e.offer.title;

  wizardElement.querySelector('.popup__text--address').textContent = e.offer.address.location.x + ' | ' + e.offer.address.location.y;

  mapCanvas.appendChild(wizardElement);
});

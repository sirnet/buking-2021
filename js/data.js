import {getRandomNumber, getRandomArrayElement} from './util.js';

let advert = [];

const TITLES = [
  'Продажа лучшей квартиры',
  'Куплю квартиру',
  'Вынос мебели',
  'Продажа квартиры возле дерева',
  'Сдам квартиру в центре'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow'
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'размеры комнаты, высота, ширина; просторно ли, светло',
  'окна, их величина, оформление',
  'стены и пол, их цвет',
  'есть ли декор, каков стиль помещения'
];

const LOCATION = {
  x : [
    35.65000,
    35.70000
  ],
  y : [
    139.70000,
    139.80000
  ]
};

const SIMILAR_ADS_COUNT = 10;

const getFeatures = (e) => {
  let features = [];
  for (let i = 0; i <= getRandomNumber(1,6,0) - 1; i++){
    let element = getRandomArrayElement(e);
      if (features.includes(element)){
        i--;
      } else {
        features.push(element);
      }
  }
  return features;
}

const  createAds = () => {
  for (let i = 0; i < SIMILAR_ADS_COUNT; i++){
    advert.push({
      author :{
        avatar : (i < 9) ? 'img/avatars/user' + 0 + (i + 1) + '.png' : 'img/avatars/user' + (i + 1) + '.png'
      },
      offer :{
        title   : getRandomArrayElement(TITLES),
        address : {
          location : {
            x   :  getRandomNumber(LOCATION.x[0], LOCATION.x[1],5),
            y   :  getRandomNumber(LOCATION.y[0], LOCATION.y[1],5)
          }
        },
        price       : getRandomNumber(1,900000,0),
        type        : getRandomArrayElement(TYPES),
        rooms       : getRandomNumber(1,5,0),
        guests      : getRandomNumber(1,5,0),
        checkin     : getRandomArrayElement(CHECKINS),
        checkout    : getRandomArrayElement(CHECKINS),
        features    : getFeatures(FEATURES),
        description : getRandomArrayElement(DESCRIPTIONS),
        photos      : 'http://o0.github.io/assets/images/tokyo/hotel' + getRandomNumber(1,3,0) + '.jpg'
      }
    });
  }
  return advert;
};

export {createAds};

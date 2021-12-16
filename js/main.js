const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];

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
  'bunglalow'
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

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const SIMILAR_ADS_COUNT = 10;


const getRandomNumber = (min, max, numberCharacters) => {
  if(min < 0 || max < 0) {
    return -1;
  }

  if(max < min){
    [min, max] = [max,min];
  }

  let random = Math.random() * (max - min + 1) + min;
  return random.toFixed(numberCharacters);

};

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const  createAds = () => {
  return author = {
    avatar : getRandomArrayElement(AVATAR)
  }
};

const infoAds = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAds());
console.log(infoAds);
getRandomNumber(3,2,3);

import { dataAds } from './loadmap.js';
import { getRandomArrayElement } from './util.js'
let dataArray = [];

const mapFilters = document.querySelector('.map__filters');
console.log(mapFilters.querySelector('#housing-type'));
const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const {statusText, status} = response;
  throw new Error(`${status} — ${statusText}`);
};

const dataUpload = (posts) => {
  for (let i = 0; i < 10; i ++) {
    dataArray[i] = getRandomArrayElement(posts);
  }
  console.log(dataArray);
  dataAds(dataArray);
}

fetch ('https://23.javascript.pages.academy/keksobooking/data/')
  .then(checkStatus)
  .then((respons) => respons.json())
  .then((posts) => dataUpload(posts))
  .catch((error) => console.log(error));

document.querySelector('#housing-type').addEventListener('click', function (evt){
  let houseType = evt;
  console.log(houseType)
});

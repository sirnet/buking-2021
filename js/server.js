import { dataAds} from './loadmap.js';
import { getRandomArrayElement } from './util.js';
let dataArray = [];
let dataSort = [];

const houseType = document.querySelector('#housing-type');

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const {statusText, status} = response;
  throw new Error(`${status} — ${statusText}`);
};

const dataUpload = (posts) => {
  dataArray = posts;
  for (let i = 0; i < 10; i ++) {
    dataSort[i] = getRandomArrayElement(posts);
  }
  dataAds(dataSort);
};

const filterHouse = (houseValue) => {
  let sortDataArray = [];
  dataArray.forEach((value, index) => {
    if (value.offer.type === houseValue){
        sortDataArray[index] = value;
    }
  });
  dataAds(sortDataArray);
};

houseType.addEventListener('change', function (){
  filterHouse(houseType.value);
});

fetch ('https://23.javascript.pages.academy/keksobooking/data/')
  .then(checkStatus)
  .then((respons) => respons.json())
  .then((posts) => dataUpload(posts))
  .catch((error) => console.log(error));



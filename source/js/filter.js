import { dataAds } from './loadmap.js';
import { dataArray, dataUpload, sortGlobalArray } from './server.js';

const houseType = document.querySelector('#housing-type');
const housePrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');

let houseFeatureCheck = [];

let sortArray = [];

houseType.addEventListener('change', function (){
  filterAds();
});

housePrice.addEventListener('change', function (){
  filterAds();
});

housingRooms.addEventListener('change', function (){
  filterAds();
});

housingGuests.addEventListener('change', function (){
  filterAds();
});

housingFeatures.addEventListener('change', function (e){
  if(houseFeatureCheck.length != 0) {
    houseFeatureCheck.forEach((value, index) => {
      if(value === e.target.value) {
        delete houseFeatureCheck[index];
        houseFeatureCheck = _.compact(houseFeatureCheck);
      }
    });
  }
  if(e.target.checked){
    houseFeatureCheck.push(e.target.value);
  }
  filterAds(houseFeatureCheck);
});

const filterAds = (array = {}) => {
  sortArray = [];
  sortArray = dataArray.slice(0, dataArray.length-1);
  if(houseType.value != 'any'){
    sortArray.forEach((value, index) => {
      if (value.offer.type != houseType.value){
          delete sortArray[index];
      }
    });
    sortArray = _.compact(sortArray);
  }

  if(housePrice.value != 'any'){
    if(housePrice.value === 'middle'){
      sortArray.forEach((value, index) => {
        if (value.offer.price <= 10000 || value.offer.price >= 50000){
          delete sortArray[index];
        }
      });
    }
    if(housePrice.value === 'low'){
      sortArray.forEach((value, index) => {
        if (value.offer.price >= 10000){
          delete sortArray[index];
        }
      });
    }
    if(housePrice.value === 'high'){
      sortArray.forEach((value, index) => {
        if (value.offer.price <= 50000){
          delete sortArray[index];
        }
      });
    }
  sortArray = _.compact(sortArray);
}

if(housingRooms.value != 'any'){
  sortArray.forEach((value, index) => {
    if (value.offer.rooms != housingRooms.value){
        delete sortArray[index];
    }
  });
  sortArray = _.compact(sortArray);
}

if(housingGuests.value != 'any'){
  sortArray.forEach((value, index) => {
    if (value.offer.guests != housingGuests.value){
        delete sortArray[index];
    }
  });
  sortArray = _.compact(sortArray);
}
if(array.length != 0 && array.length != undefined){
  sortArray.forEach((value, index) => {
    if (JSON.stringify(value.offer.features) != JSON.stringify(array)){
        delete sortArray[index];
    }
  });
  sortArray = _.compact(sortArray);
}

if(houseType.value === 'any' && housePrice.value === 'any' &&
  housingRooms.value === 'any' && housingGuests.value === 'any' &&
  (array.length === 0 || array.length === undefined)){
  dataUpload(sortGlobalArray);
} else {
  let arrayBlock = [];
  for (let i = 0; i <= 10; i ++) {
    if(sortArray[i] != undefined) arrayBlock[i] = sortArray[i];
  }
  dataAds(arrayBlock);
}
};

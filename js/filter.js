import { dataAds } from './loadmap.js';
import { dataArray } from './server.js';
const houseType = document.querySelector('#housing-type').querySelector('option');
const housePrice = document.querySelector('#housing-price');

const mapFilters = document.querySelector('.map__filters');

let toggleCheck = false;

houseType.addEventListener('change', function (){
  console.log(houseType);
  houseType.setAttribute('selected', 'selected');
});

// const filterHouse = (houseValue) => {
//   let sortDataArray = [];
//   dataArray.forEach((value, index) => {
//     if (value.offer.type === houseValue){
//         sortDataArray[index] = value;
//     }
//   });

//   dataAds(sortDataArray);
// };

// houseType.addEventListener('change', function (){
//   if(houseType.value === 'any'){
//      toggleCheck = false;
//    } else {
//      toggleCheck = true;
//      filterHouse(houseType.value);
//    }

// });

// housePrice.addEventListener('change', function (){
//   if(housePrice.value === 'any'){
//      toggleCheck = false;
//    } else {
//      toggleCheck = true;
//      filterHouse(housePrice.value);
//    }

// });

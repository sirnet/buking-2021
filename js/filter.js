import { dataAds } from './loadmap.js';
import { dataArray } from './server.js';

const houseType = document.querySelector('#housing-type');
const housePrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');


let toggleCheck = false;
let houseTypeCheck = 'any';
let housePriceCheck = 'any';
let houseRoomsCheck = 'any';
let houseGuestCheck = 'any';
let houseFeatureCheck = [];



houseType.addEventListener('change', function (){
  let sortDataArray = [];
  let i = 0;
  console.log(dataArray);
    dataArray.forEach((value) => {
      if (value.offer.type === houseType.value){
          sortDataArray[i] = value;
          i++;
      }
  });
  //dataArray = [];
  console.log(dataArray);
  dataAds(sortDataArray);
  //filterAds();
});

housePrice.addEventListener('change', function (){
  housePriceCheck = housePrice.value;
  filterAds();
});

housingRooms.addEventListener('change', function (){
  houseRoomsCheck = housingRooms.value;
  filterAds();
});

housingGuests.addEventListener('change', function (){
  houseGuestCheck = housingGuests.value;
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
  filterAds();
});

const filterAds = () => {
  console.log(houseTypeCheck, housePriceCheck, houseRoomsCheck, houseGuestCheck, houseFeatureCheck);

};


// housePrice.addEventListener('change', function (){
//   housePrice.options[housePriceCheck].removeAttribute('selected');
//   housePriceCheck = housePrice.selectedIndex;
//   housePrice.options[housePriceCheck].setAttribute('selected', 'selected');
// });

// housingRooms.addEventListener('change', function (){
//   housingRooms.options[houseRoomsCheck].removeAttribute('selected');
//   houseRoomsCheck = housingRooms.selectedIndex;
//   housingRooms.options[houseRoomsCheck].setAttribute('selected', 'selected');
// });

// housingGuests.addEventListener('change', function (){
//   housingGuests.options[houseGuestCheck].removeAttribute('selected');
//   houseGuestCheck = housingGuests.selectedIndex;
//   housingGuests.options[houseGuestCheck].setAttribute('selected', 'selected');
// });

// housingFeatures.addEventListener('change', function (e){
//   console.log(e.target.value);
// });

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

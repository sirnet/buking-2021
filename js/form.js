import {toggleDisabled} from './loadmap.js';

const typeDigs = document.querySelector('#type');
const typePrice = document.querySelector('#price');

const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const adForm = document.querySelector('.ad-form');

const mapFilter = document.querySelector('.map__filters');

const address = document.querySelector('#address');


if (toggleDisabled === 'disabled') {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('ad-form--disabled');
} else {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('ad-form--disabled');
}

const addDisabled = function(value = null){
  if(toggleDisabled === 'disabled'){
    value.setAttribute("disabled", toggleDisabled);
  } else {
    value.removeAttribute("disabled");
  }
};

for (const [key, value] of Object.entries(adForm)) {
  addDisabled(value);
}

for (const [key, value] of Object.entries(mapFilter)) {
  addDisabled(value);
}

typeDigs.addEventListener ('change', function() {
  switch (typeDigs.value) {
    case "bungalow":
      return typePrice.value = 0;
    case "flat":
      return typePrice.value = 1000;
    case "palace":
      return typePrice.value = 10000;
    case "house":
      return typePrice.value = 5000;
    default:
        null;
  }
});

timein.addEventListener ('change', function() {
  switch (timein.value) {
    case '12:00':
      return timeout.selectedIndex = 0;
    case '13:00':
      return timeout.selectedIndex = 1;
    case '14:00':
      return timeout.selectedIndex = 2;
  }
});

timeout.addEventListener ('change', function() {
  switch (timeout.value) {
    case '12:00':
      return timein.selectedIndex = 0;
    case '13:00':
      return timein.selectedIndex = 1;
    case '14:00':
      return timein.selectedIndex = 2;
  }
});

export {address};

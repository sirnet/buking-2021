
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const adformSubmit = document.querySelector('.ad-form');

const successComplit = document.querySelector('#success').content.querySelector('.success');
const errorComplit = document.querySelector('#error').content.querySelector('.error');



window.addEventListener("load", function(event) {
  if(roomNumber.value < capacity.value){
    roomNumber.setCustomValidity("Количество комнат меньше чем гостей");
  }
});

roomNumber.addEventListener('change', function(){
  if(roomNumber.value < capacity.value){
    roomNumber.setCustomValidity("Количество комнат меньше чем гостей");
  } else {
    roomNumber.setCustomValidity('');
}
});

document.addEventListener('keydown', function (e) {
  if(document.querySelector('.success')){
    if(e.key === 'Escape'){
      document.querySelector('.success').remove();
    }
  }
  if(document.querySelector('.error')){
    if(e.key === 'Escape'){
      document.querySelector('.error').remove();
    }
  }
});

document.addEventListener('click', function () {
  if(document.querySelector('.success')){
    document.querySelector('.success').remove();
  }
  if(document.querySelector('.error')){
      document.querySelector('.error').remove();
  }
});

const checkStatus = (response) => {
  if (response.ok) {
    const successElement = successComplit.cloneNode(true);
    document.body.appendChild(successElement);
    adformSubmit.reset();
    return response;
  } else {
    const errorElement = errorComplit.cloneNode(true);
    document.body.appendChild(errorElement);
  }

};

adformSubmit.addEventListener('submit', function(evt){
  evt.preventDefault();
  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: new FormData(adformSubmit),
  })
  .then((response) => checkStatus(response));
});




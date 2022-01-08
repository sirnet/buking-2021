const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const adformSubmit = document.querySelector('.ad-form');

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






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

getRandomNumber(3,2,3);



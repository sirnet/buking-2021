
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


export {getRandomNumber, getRandomArrayElement};

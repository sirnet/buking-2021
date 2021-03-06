import { dataAds } from './loadmap.js';

let dataArray = [];
let dataSort = [];
let sortGlobalArray = [];

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  const {statusText, status} = response;
  throw new Error(`${status} — ${statusText}`);
};

const dataUpload = (posts) => {
  dataArray = Object.assign(posts);
  sortGlobalArray = Object.assign(posts);
  for (let i = 0; i <= 10; i ++) {
    dataSort[i] = posts[i];
  }
  dataAds(dataSort);
};

fetch ('https://23.javascript.pages.academy/keksobooking/data/')
  .then(checkStatus)
  .then((respons) => respons.json())
  .then((posts) => dataUpload(posts))
  .catch((error) => console.log(error));

export { dataArray };
export { sortGlobalArray };
export { dataUpload };

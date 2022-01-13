import { dataAds } from './loadmap.js';


const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  const {statusText, status} = response;
  throw new Error(`${status} — ${statusText}`);
}

const dataCheckout = (data) => {
  preparedAds = data;
}

fetch ('https://23.javascript.pages.academy/keksobooking/data/')
  .then(checkStatus)
  .then((respons) => respons.json())
  .then((posts) => dataAds(posts))
  .catch((error) => console.log(error));



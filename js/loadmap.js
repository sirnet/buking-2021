import './form.js';
import {formAds, preparedAds} from './card.js';

let toggleDisabled = 'disabled';

const map = L.map('map-canvas')
  .on('load', () => {
    toggleDisabled = "";
  })
  .setView({
    lat:35.6895,
    lng:139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  shadowUrl: '/leaflet/images/marker-shadow.png',
  iconSize: [52, 52],
  shadowSize: [78, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat:35.6895,
    lng:139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.on('moveend', (evt) => {
  let position = evt.target.getLatLng();
  address.value = Math.round(position['lat'] * 10000)/10000 + ' ' + Math.round(position['lng'] * 1000)/1000;
});

mainPinMarker.addTo(map);

preparedAds.forEach((value) => {
  const icon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat: value.offer.address.location.x,
    lng: value.offer.address.location.y,
  },
  {
    icon,
  });
  marker
    .addTo(map)
    .bindPopup(
      formAds(value.offer, value.author),
      {
        keepInView: true,
      }
    );
});

export {toggleDisabled};

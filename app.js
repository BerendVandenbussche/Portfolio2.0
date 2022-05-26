'use strict';

const showWeatherData = (data) => {
  document.querySelector('.js-temp').innerHTML = data + '°C';
};

const getData = (url, callback) => {
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(`Problem with fetch(). Status Code: ${response.status}`);
      } else {
        console.info('Got response');
        return response.json();
      }
    })
    .then(function (jsonObject) {
      console.info('Created json object');
      console.info('Reading data');
      callback(jsonObject);
    })
    .catch(function (error) {
      console.error(`Error with json ${error}`);
    });
};

const listenToMobileMenu = () => {
  const menu = document.querySelector('.js-mobile-menu');
  const container = document.getElementById('mobile-menu');
  const background = document.getElementById('main');
  container.style.display = 'none';
  menu.addEventListener('click', function () {
    if (container.style.display == 'none') {
      container.style.display = 'block';
      background.classList.add('u-height-auto');
    } else {
      container.style.display = 'none';
      background.classList.remove('u-height-auto');
    }
  });
};

const init = () => {
  listenToMobileMenu();
  getData('http://141.134.231.181:5500/api/v1/weather/temperature', showWeatherData);
};

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM geladen 🎉');
  init();
});

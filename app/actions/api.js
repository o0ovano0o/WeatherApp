import config from '../../config';
const { appid, url } = config;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?&lang=vi&units=metric&APPID=${appid}`;



module.exports = (latitude, longitude) => {
  const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;

  return fetch(url).then((response) => {
    return response.json();
  }).then((json) => {
    return {
      city: json.name,
      temperature: json.main.temp,
      description: json.weather[0].description
    };
  }).catch(err => console.log(err));
};
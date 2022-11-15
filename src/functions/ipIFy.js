import { createMap } from "./map";
const inputIp = document.querySelector('#ip');
const btnSubmit = document.querySelector('#btn-submit');
const regularExpressions = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;


async function searchWithAPI(ip){
    const API = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_rOFoFWz8ws4sR6A8mx3Kf3nWcGv00&ipAddress=${ip}`, {mode: "cors"});
    const rest = await API.json();
    const a = rest.ip;
    const b = rest.location.region;
    const c = rest.location.timezone;
    const d = rest.isp;
    const lat = rest.location.lat;
    const lon = rest.location.lng;
    createMap(lat, lon);
    showRest(a, b, c, d);
}

async function callAPI(){
    const API = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_rOFoFWz8ws4sR6A8mx3Kf3nWcGv00', {mode: "cors"});
    const rest = await API.json();
    const a = rest.ip;
    const b = rest.location.region;
    const c = rest.location.timezone;
    const d = rest.isp;
    const lat = rest.location.lat;
    const lon = rest.location.lng;
    createMap(lat, lon);
    showRest(a, b, c, d);
}

btnSubmit.addEventListener('click', () => {
   if(regularExpressions.test(inputIp.value)){
    searchWithAPI(inputIp.value);
    inputIp.value = '';
   } else{
    inputIp.value = '';
    inputIp.placeholder = 'Invalid ip address...';
   }
});

function showRest(a, b, c, d){
    const ipAddress = document.querySelector('#ipAddress');
    const location = document.querySelector('#location');
    const timezone = document.querySelector('#timezone');
    const isp = document.querySelector('#isp');

    ipAddress.innerText = a;
    location.innerText = b;
    timezone.innerText = c;
    isp.innerText = d;
}

export {callAPI}
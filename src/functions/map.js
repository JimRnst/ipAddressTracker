const map = L.map('map');

const createMap = (function(a, b){
    map.setView([a, b], 13)
    const marker = L.marker([a, b]).addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});

export {createMap}
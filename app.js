
const map = L.map("map").setView([6.1738947, 1.2133044], 16);
var worldCoords = [[-90, -180], [-90, 180], [90, 180], [90, -180]];

var coordinates = [
  [6.182316, 1.20862],
  [6.182441, 1.206332],
  [6.185476, 1.207222], // coordonnées du coin supérieur gauche
  [6.187396, 1.208767],
  [6.188644, 1.211251], // coordonnées du coin supérieur droit
  [6.165227, 1.222588], // coordonnées du coin inférieur droit
  [6.165174, 1.210743], // coordonnées du coin inférieur gauche
];
var parisCoords = [[6.1738947, 1.2133044]];
var polygonCoords = [worldCoords, coordinates];

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

var polygon = L.polygon(polygonCoords, {
  fillColor: 'white',
  stroke: true,
  color: 'white',
  weight: 2,
  opacity: 1,
  fillOpacity: 1
}).addTo(map);

// Créez un tableau de coordonnées pour délimiter la zone
var coordinates = [
  [6.182316, 1.20862],
  [6.182441, 1.206332],
  [6.185476, 1.207222], // coordonnées du coin supérieur gauche
  [6.187396, 1.208767],
  [6.188644, 1.211251], // coordonnées du coin supérieur droit
  [6.165227, 1.222588], // coordonnées du coin inférieur droit
  [6.165174, 1.210743], // coordonnées du coin inférieur gauche
];

var marker = L.marker([6.182441, 1.206332]).addTo(map);

// add a click event listener to the marker
marker.on('click', function() {
  // define the target location and zoom level
  var targetLocation = L.latLng(6.188644, 1.211251);
  var targetZoomLevel = 20;
  
  // zoom into the target location with animation
  map.setView(targetLocation, targetZoomLevel, {
    animate: true,
    duration: 1.5 // duration of animation in seconds
  });
});

function addMarker() {
  var marker2 = L.marker([6.17349745,1.2133331761650488]).addTo(map);
  var targetLocation = L.latLng(6.17349745,1.2133331761650488);
  var targetZoomLevel = 20;
  
  // zoom into the target location with animation
  map.setView(targetLocation, targetZoomLevel, {
    animate: true,
    duration: 1.5 // duration of animation in seconds
  });
}
// Créez une couche de polygone à partir des coordonnées
var polygon2 = L.polygon(coordinates, { color: "white" }).addTo(map);

//-------------------------------------------------------------------------------------

// Récupérer la position de l'utilisateur
 map.locate({setView: true, maxZoom: 25});

function onLocationFound(e) {
  // Créer un marqueur pour la position de l'utilisateur
  var marker = L.marker(e.latlng).addTo(map);
  marker.bindPopup("Vous êtes ici !").openPopup();
}

function onLocationError(e) {
  alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// //-------------------------------------------------------------------------------------------------
// // Remplacer les coordonnées géographiques ci-dessous par celles de votre choix
// var latitude = 6.187396;
// var longitude = 1.208767;

// // Géocoder les coordonnées géographiques en nom de ville
// var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + latitude + "&lon=" + longitude;
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Récupérer le nom de la ville
//     var ville = data.address.city;

//     // Tracer l'itinéraire
//     L.Routing.control({
//       waypoints: [
//         L.latLng(map.getCenter().lat, map.getCenter().lng),
//         L.latLng(latitude, longitude)
//       ],
//       routeWhileDragging: true
//     }).addTo(map);
//   });

//--------------------------------------------------------------------------------------------------------------------------------


// // Récupérer la position de l'utilisateur
// map.locate({setView: true, maxZoom: 16});

// function onLocationFound(e) {
//   // Créer un marqueur pour la position de l'utilisateur
//   var marker = L.marker(e.latlng).addTo(map);
//   marker.bindPopup("Vous êtes ici !").openPopup();

//   // Géocoder les coordonnées géographiques en nom de ville
//   var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + e.latitude + "&lon=" + e.longitude;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       // Récupérer le nom de la ville
//       var ville = data.address.city;

//       // Tracer l'itinéraire
//       L.Routing.control({
//         waypoints: [
//           L.latLng(e.latitude, e.longitude),
//           L.latLng(map.getCenter().lat, map.getCenter().lng)
//         ],
//         routeWhileDragging: true
//       }).addTo(map);
//     });
// }

// function onLocationError(e) {
//   alert(e.message);
// }

// map.on('locationfound', onLocationFound);
// map.on('locationerror', onLocationError);

//-----------------------------------------------------------------------------------------------------------------

// Ajustez l'affichage de la carte pour afficher uniquement la zone délimitée
map.fitBounds(polygon2.getBounds());
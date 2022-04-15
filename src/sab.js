'use strict';

var mymap = L.map('mapid').setView([-22.90309921448796, -43.12773227691651], 15);

var popup = L.popup();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.satellite',
  accessToken: 'pk.eyJ1IjoiZGFuaWxvc2ljIiwiYSI6ImNrMW54OHY5cTBnOXUzbXEzazRxZzg4dXAifQ.dwMFsKzaU7RHsPKcD4aPgA'
}).addTo(mymap);

INITIALFUNTION();
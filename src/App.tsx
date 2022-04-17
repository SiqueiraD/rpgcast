import './App.css';
import { MapContainer, Popup, TileLayer, useMapEvents, Pane, useMapEvent, useMap, LayersControl } from 'react-leaflet'
import { LatLng, Polygon, Layer, Marker, LayerGroup, Map, } from 'leaflet';
import { useState } from 'react';
import { idText } from 'typescript';
import { LayersControlExample } from './LayersControlExample';
import N from './novoT'

function App() {
  console.log('app -  inicio')
  return (
    <div>
      <div id='mapa'>
      </div>
      <N/>
    </div>
  )
}

export default App;

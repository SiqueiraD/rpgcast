import './App.css';
import { MapContainer, Popup, TileLayer, useMapEvents, ImageOverlay, useMapEvent, useMap, LayersControl, Pane, Marker as MarkerReact } from 'react-leaflet'
import { LatLng, Polygon, Layer, Marker, LayerGroup, Map, Point, CRS, Control, Icon } from 'leaflet';
import { useState, useEffect } from 'react';
import RenderPlanoFundo from './RenderPlanoFundo';
import ButtonTopRightControl from './ButtonTopRightControl';
import CriadorDeRegiao from './CriadorRegiao';




function App2() {
  const [showView, setShowView] = useState('MapaComum')
  const [zoomView, setzoomView] = useState(15)
  
  function setView(newView: string) {
    if (showView != newView)
      setTimeout(() => {
        if (showView != newView)
          setShowView(newView)
      }, 20);
  }
  return (
    <MapContainer minZoom={-1} zoomSnap={0.5}>
      <Pane name={'plano-fundo'} style={{ zIndex: 1 }} />
      <CriadorDeRegiao />
      <RenderPlanoFundo showView={showView}/>
      <ButtonTopRightControl  showView={showView} setShowView={setView} />
    </MapContainer>
  )
}

export default App2;
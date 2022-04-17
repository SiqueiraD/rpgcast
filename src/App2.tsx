import './App.css';
import { MapContainer, Pane, useMap } from 'react-leaflet'
import { useState } from 'react';
import RenderPlanoFundo from './RenderPlanoFundo';
import ButtonTopRightControl from './examples/ButtonTopRightControl';
import CriadorDeRegiao from './CriadorRegiao';
import Leaflet from 'leaflet';
import CursorControl from './components/CursorControl/CursorControl';
import React from 'react';
import { eventNames } from 'process';

function App2() {
  console.log('App2 - Iniciando..')
  const [showView, setShowView] = useState('MapaComum')
  const [zoomView, setZoomView] = useState(15)
  const [dragging, setDragging] = useState(true)
  const [zoomControl, setZoomControl] = useState(true)
  const [zoomEnabled, setZoomEnabled] = useState(true)
  const [moveEnabled, setMoveEnabled] = useState(true)
  const [boxZoom, setBoxZoom] = useState(true)
  const [doubleClickZoom, setDoubleClickZoom] = useState(true)


  function setView(newView: string) {
    if (showView != newView)
      setTimeout(() => {
        if (showView != newView)
          setShowView(newView)
      }, 20);
  }


  return (
    <MapContainer id="mapa"
      minZoom={-1} zoomSnap={0.5} doubleClickZoom={doubleClickZoom}
    >
      <Pane name={'plano-fundo'} style={{ zIndex: 1 }} />
      <CriadorDeRegiao/>
      <RenderPlanoFundo showView={showView} />
      <ButtonTopRightControl showView={showView} setShowView={setView} />
      <CursorControl />
    </MapContainer>
  )
}

export default App2;
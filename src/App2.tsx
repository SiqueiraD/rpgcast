import './App.css';
import { MapContainer, Pane } from 'react-leaflet'
import { useState } from 'react';
import RenderPlanoFundo from './RenderPlanoFundo';
import ButtonTopRightControl from './examples/ButtonTopRightControl';
import CursorControl from './components/CursorControl/CursorControl';


function teste() {
  console.log('whenredy')
}
function App2() {
  console.log('App2 - Iniciando..')
  const [showView, setShowView] = useState('MapaComum')


  function setView(newView: string) {
    if (showView != newView)
      setTimeout(() => {
        if (showView != newView)
          setShowView(newView)
      }, 20);
  }


  return (
    <MapContainer id="mapa"
      minZoom={-1}  whenReady={teste}
    >
      <Pane name={'plano-fundo'} style={{ zIndex: 1 }} />
      <RenderPlanoFundo showView={showView} />
      <ButtonTopRightControl showView={showView} setShowView={setView} />
      <CursorControl />
    </MapContainer>
  )
}

export default App2;
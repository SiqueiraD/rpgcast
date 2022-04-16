import { LatLng } from "leaflet";
import { ImageOverlay, useMap } from "react-leaflet";

function RPGMapa() {
    const map = useMap();
    map.setView(new LatLng(-65.38416933463623, 127.19530820846559), 2)
    // setCenterPos(new LatLng(-65.38416933463623, 127.19530820846559))
    return (
      <ImageOverlay
        pane='plano-fundo'
        url="https://i.redd.it/ex6t4qe79db41.jpg"
        bounds={[[-300, 0], [0, 250]]}
      />)
  }

  export default RPGMapa;
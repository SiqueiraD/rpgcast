import { LatLng } from "leaflet";
import { ImageOverlay, useMap } from "react-leaflet";
import myBoard from './quimica-board.jpg'

function TabuleiroKapital() {
    const map = useMap();
    map.setView(new LatLng(-65.38416933463623, 127.19530820846559), 2)
    // setCenterPos(new LatLng(-65.38416933463623, 127.19530820846559))
    return <ImageOverlay
      pane='plano-fundo'
      url={myBoard}
      bounds={[[-721, 0], [0, 300]]}
    />
  }

  export default TabuleiroKapital;
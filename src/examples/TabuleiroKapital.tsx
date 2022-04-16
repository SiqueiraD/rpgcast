import { LatLng } from "leaflet";
import { ImageOverlay, useMap } from "react-leaflet";

function TabuleiroKapital() {
    const map = useMap();
    map.setView(new LatLng(-65.38416933463623, 127.19530820846559), 2)
    // setCenterPos(new LatLng(-65.38416933463623, 127.19530820846559))
    return <ImageOverlay
      pane='plano-fundo'
      url="https://cf.geekdo-images.com/8PydAOaSuqNz2nFmZLA2vw__imagepagezoom/img/sIXr3sulH6LwiWtEi1uQFmr-yPk=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5470744.jpg"
      bounds={[[-721, 0], [0, 300]]}
    />
  }

  export default TabuleiroKapital;
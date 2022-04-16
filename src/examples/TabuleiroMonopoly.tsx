import { LatLng } from "leaflet";
import { ImageOverlay, useMap } from "react-leaflet";

function TabuleiroMonopoly() {
    const map = useMap();
    map.setView(new LatLng(-65.38416933463623, 127.19530820846559), 2)
    return <ImageOverlay
      pane='plano-fundo'
      // url="https://cf.geekdo-images.com/8PydAOaSuqNz2nFmZLA2vw__imagepagezoom/img/sIXr3sulH6LwiWtEi1uQFmr-yPk=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5470744.jpg"
      // bounds={[[836, 0], [0, 1200]]}
      url="https://preview.redd.it/9kru3xq8p1741.jpg?auto=webp&s=02f97d6221af306ab9ea28bfb80eb8e293897657"
      bounds={[[0, 0], [0, 200]]}
    />
  }

  export default TabuleiroMonopoly;
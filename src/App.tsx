import './App.css';
import { MapContainer, Popup, TileLayer, useMapEvents, Pane, useMapEvent, useMap, LayersControl } from 'react-leaflet'
import { LatLng, Polygon, Layer, Marker, LayerGroup, Map, } from 'leaflet';
import { useState } from 'react';
import { idText } from 'typescript';
import { LayersControlExample } from './LayersControlExample';

let map: Map | LayerGroup<any>;

function CriacaoDeRegiao() {
  let points: LatLng[] = [];
  let layers_mark: Marker[] = [];
  let i_points = 0;
  let layers_polygon: Polygon[] = [];
  let i_polygons = 0;
  // const [emps, setEmps] = useState(points);
  map = useMapEvents({
    click: (e: { originalEvent: { defaultPrevented: any; }; latlng: LatLng; }) => {
      if (!e.originalEvent.defaultPrevented) {
        layers_mark[i_points] = new Marker(e.latlng);
        points[i_points] = e.latlng;
        //Click em algum ponteiro do mapa
        layers_mark[i_points].on('click', () => {
          layers_polygon[i_polygons] = new Polygon(points);
          //Click dentro da regiaoi
          layers_polygon[i_polygons].on('click', (e: any) => {
            e.originalEvent.preventDefault();
          })
          layers_polygon[i_polygons].addTo(map);
          for (var i = i_points - 1; i >= 0; i--) {
            layers_mark[i].remove();
          }
          points = [];
          i_points = 0;
          i_polygons++;
        });
        layers_mark[i_points].addTo(map);
        i_points++;
      }
    }
  })
  return null;
}


let predef_polygon: Polygon[] = [];
let i_predef_polygons = 0;
function Gragoata() {
  map = useMap()
  if (i_predef_polygons == 0) {
    var grags = '[[{"lat":-22.90118683637209,"lng":-43.135880827903755},{"lat":-22.901275784789366,"lng":-43.13497424125672},{"lat":-22.900198516699678,"lng":-43.13264608383179},{"lat":-22.89988719451135,"lng":-43.13214719295502},{"lat":-22.898770382051634,"lng":-43.13141226768494},{"lat":-22.89772274430632,"lng":-43.130704164505005},{"lat":-22.89716927204246,"lng":-43.12984049320221},{"lat":-22.89671957416535,"lng":-43.128912448883064},{"lat":-22.896368709951233,"lng":-43.12820971012116},{"lat":-22.896235282476713,"lng":-43.12751233577729},{"lat":-22.895726280165057,"lng":-43.1275498867035},{"lat":-22.895558259565277,"lng":-43.128987550735474},{"lat":-22.89504431290948,"lng":-43.12908411026002},{"lat":-22.895587910274465,"lng":-43.12925040721894},{"lat":-22.89616609780864,"lng":-43.13079535961152},{"lat":-22.896966661095544,"lng":-43.13348829746247},{"lat":-22.89769309406371,"lng":-43.13567161560059},{"lat":-22.89817738054803,"lng":-43.13556969165803},{"lat":-22.898696257005454,"lng":-43.135462403297424},{"lat":-22.899600579801465,"lng":-43.13525855541229},{"lat":-22.900445597292933,"lng":-43.13564479351044}]]';
    var j1 = JSON.parse(grags);
    predef_polygon[i_predef_polygons] = new Polygon(j1, {
      color: 'purple',
    });
    //var lasda =pol.getPane('plano-fundo')
    predef_polygon[i_predef_polygons].addTo(map);
    var listaPenas = map.getPanes();
    i_predef_polygons++;
  }
  return null
}

function App() {

  return (
    // <div>
    //   <div id='mapa'>

    //   </div>
    //   <Gragoata />
    // </div>
    <MapContainer id='mapa' center={[-22.90309921448796, -43.12773227691651]} zoom={15} >
      <Pane name={'plano-fundo'} style={{zIndex:1}} />
      <TileLayer
        pane='plano-fundo'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Gragoata />
      <CriacaoDeRegiao />
      <LayersControlExample />
    </MapContainer>
  )
}

export default App;

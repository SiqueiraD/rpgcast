import './App.css';
import { MapContainer, Popup, TileLayer, useMapEvents, ImageOverlay, useMapEvent, useMap, LayersControl, Pane, Marker as MarkerReact } from 'react-leaflet'
import { LatLng, Polygon, Layer, Marker, LayerGroup, Map, Point, CRS, Control, Icon } from 'leaflet';
import { useState } from 'react';
import { idText } from 'typescript';

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
          layers_polygon[i_polygons] = new Polygon(points, { pane: "plano-fundo" });
          console.log(points);
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

let centerPos: LatLng = new LatLng(-97.94128007775083, 129.744985710285); ///360, 360);

function MapaComum() {
  centerPos = new LatLng(-22.90309921448796, -43.12773227691651);
  return <TileLayer
    pane='plano-fundo'
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
}
function TabuleiroMonopoly() {
  centerPos = new LatLng(360, 360);
  return   <ImageOverlay
    pane='plano-fundo'
    // url="https://cf.geekdo-images.com/8PydAOaSuqNz2nFmZLA2vw__imagepagezoom/img/sIXr3sulH6LwiWtEi1uQFmr-yPk=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5470744.jpg"
    // bounds={[[836, 0], [0, 1200]]}
    url="https://preview.redd.it/9kru3xq8p1741.jpg?auto=webp&s=02f97d6221af306ab9ea28bfb80eb8e293897657"
    bounds={[[-216, 0], [0, 217]]}
  />
}
function TabuleiroKapital() {
  centerPos = new LatLng(415, 600);
  return  <ImageOverlay
  pane='plano-fundo'
  url="https://cf.geekdo-images.com/8PydAOaSuqNz2nFmZLA2vw__imagepagezoom/img/sIXr3sulH6LwiWtEi1uQFmr-yPk=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5470744.jpg"
  bounds={[[-836, 0], [0, 1200]]}
/>
}

function App2() {

  return (
    <MapContainer center={centerPos} crs={CRS.Simple} zoom={2} maxZoom={8} minZoom={-1}>
      <Pane name={'plano-fundo'} />
      <CriacaoDeRegiao />
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Mapa Comum">
          <MapaComum />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Jogo RPG (Mapainkarnate.com)">
          <ImageOverlay
            pane='plano-fundo'
            url="https://i.redd.it/ex6t4qe79db41.jpg"
            bounds={[[-216, 0], [0, 306]]}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Jogo tabuleiro (Monopoly)">
          <TabuleiroMonopoly/>
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Jogo tabuleiro (Kapital)">
          <TabuleiroKapital/>
        </LayersControl.BaseLayer>
        {/* <LayersControl.Overlay checked name="Marker with popup">
          <MarkerReact position={[-22.899103572367217, -43.119889846284465]} icon={new Icon({ iconSize: [25, 40], iconAnchor: [13, 40], iconUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F23-230399_google-maps-pin-png-red-map-marker-png.png&f=1&nofb=1" })}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </MarkerReact>
        </LayersControl.Overlay> */}
      </LayersControl>
      {/* <Gragoata />
      <CriacaoDeRegiao />
      <LayersControlExample /> */}
    </MapContainer>
  )
}

export default App2;

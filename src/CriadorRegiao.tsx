import { LatLng, Marker, Polygon } from "leaflet";
import { useMapEvents } from "react-leaflet";

function CriadorDeRegiao() {
  let points: LatLng[] = [];
  let layers_mark: Marker[] = [];
  let i_points = 0;
  let layers_polygon: Polygon[] = [];
  let i_polygons = 0;
  // const [emps, setEmps] = useState(points);
  const map = useMapEvents({
    click: (e: { originalEvent: { defaultPrevented: any, path?: HTMLCollection }; latlng: LatLng; }) => {
      //!e.originalEvent.defaultPrevented || 
      if (!e.originalEvent.defaultPrevented &&
        e.originalEvent.path && !Array.from(e.originalEvent.path).some
          ((x) =>
            x.className &&
            typeof (x.className) == typeof ("") && x.className.includes('leaflet-control')
          )
      ) {
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


export default CriadorDeRegiao;
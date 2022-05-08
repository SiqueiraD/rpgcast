//import { Control } from "react-leaflet";

import { LatLng, Marker, Polygon } from "leaflet"
import L from "leaflet"
import { useState } from "react"
import { useMap } from "react-leaflet"
import RadioCustomControl from "../UI/RadioCustomControl"
import arrowCursor from './arrowCursor.svg'
import draggingCursor from './draggingCursor.svg'


function CursorControl() {
  let points: LatLng[] = [];
  let layers_mark: Marker[] = [];
  let i_points = 0;
  let layers_polygon: Polygon[] = [];
  let i_polygons = 0;
  const pinClickPolygon = (e: { originalEvent: { defaultPrevented: any, path?: HTMLCollection, preventDefault: any }; latlng: LatLng; }) => {
    if (
      !e.originalEvent.defaultPrevented &&
      e.originalEvent.path &&
      !Array.from(e.originalEvent.path)
        .some(
          (x) =>
            x.className &&
            typeof (x.className) == typeof ("") &&
            x.className.includes('leaflet-control')
        )
    ) {
      console.log(e.latlng)
      layers_mark[i_points] = new Marker(e.latlng);
      points[i_points] = e.latlng;
      //Click em algum ponteiro do mapa
      layers_mark[i_points].on('click', () => {
        layers_polygon[i_polygons] = new Polygon(points);
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
      e.originalEvent.preventDefault()
    }
  }




  const [selected, setSelected] = useState(draggingCursor)
  const [styleImg, setStyleImg] = useState({ height: 50, paddingTop: 5, padding: 5, margin: 5, border: '1px red' })
  const map = useMap()
  // map.dragging
  const altText = ""
  //const originalZoomEvent = map.on('zoom')


  const interactionOptionsOFF = function () {
    map.dragging.disable()
    map.zoomControl.remove()
    map.doubleClickZoom.disable()
    map.touchZoom.disable()
    map.boxZoom.disable()
    map.scrollWheelZoom.disable()
    map.on({ click: pinClickPolygon })
  };
  const interactionOptionsON = function () {
    map.zoomControl.addTo(map)
    map.dragging.enable()
    map.doubleClickZoom.enable()
    map.boxZoom.enable()
    map.touchZoom.enable()
    map.scrollWheelZoom.enable()
    map.off('click')
  };

  function ImageButton(prop: { src: string, alt: string, }) {
    //map.dragging = new Handler(map)
    return (
      <img src={prop.src} alt={prop.alt}
        style={styleImg} className={"buttonCursor"}
        onClick={() => {
          setSelected(prop.src)
          if (prop.src == arrowCursor) {
            setTimeout(() => {
              interactionOptionsOFF()
            });
            // map.dragging.disable()
            // map.doubleClickZoom.disable()
            // map.boxZoom.disable()
            // map.scrollWheelZoom.disable()
            // map.zoomControl.remove()
          }
          if (prop.src == draggingCursor) {
            setTimeout(() => {
              interactionOptionsON()
            });
            // map.dragging.enable()
            // map.doubleClickZoom.enable()
            // map.boxZoom.enable()
            // map.scrollWheelZoom.enable()
            // map.zoomControl.addTo(map)
          }
        }} />
    )
  }

  return (
    <RadioCustomControl
      placeholder={
        <ImageButton src={selected} alt={altText} />
      }
      options={
        [
          <a key={arrowCursor}
          // onMouseEnter={() => { setStyleImg({ height: 50, paddingTop: 5, padding: 5, margin: 5, border: '1px red solid' }) }}
          // onMouseLeave={() => { setStyleImg({ height: 50, paddingTop: 5, padding: 5, margin: 5, border: '1px red' }) }}
          >
            <ImageButton src={arrowCursor} alt="cursor de seta, tela fica estática" />
          </a>,
          <a key={draggingCursor}
          // onMouseEnter={() => { setStyleImg({ height: 50, paddingTop: 5, padding: 5, margin: 5, border: '1px red solid' }) }}
          // onMouseLeave={() => { setStyleImg({ height: 50, paddingTop: 5, padding: 5, margin: 5, border: '1px red' }) }}
          >
            <ImageButton src={draggingCursor} alt="cursor de agarrar, tela fica móvel" />
          </a>,
        ]
      } />
  )
}


export default CursorControl;


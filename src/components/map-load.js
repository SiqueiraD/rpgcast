// @flow

import React, { createRef, Component} from 'react'
import { Map, ImageOverlay } from 'react-leaflet'

export const pointerIcon = new L.Icon({
    iconUrl: '../assets/pointerIcon.svg',
    iconRetinaUrl: '../assets/pointerIcon.svg',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowUrl: '../assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })
  
type State = {
    hasLocation: boolean,
    latlng: {
      lat: number,
      lng: number,
    },
  }  

export default class MapLoad extends Component<{}, State> {
    state = {
      hasLocation: false,
      latlng: {
        lat: 51.505,
        lng: -0.09,
      },
    }

    points = [];
    layers_mark = [];
    i_points = 0;
    layers_polygon = [];
    i_polygons = 0;
  
    mapRef = createRef<Map>()
  
    // handleClick = () => {
    //   const map = this.mapRef.current
    //   if (map != null) {
    //     map.leafletElement.locate()
    //   }
    // }

    

    onMapClick = (e) => {
       const map = this.mapRef.current
        if (!e.originalEvent.defaultPrevented) {
            //console.log(e.latlng);
            this.points[this.i_points] = e.latlng;
            this.layers_mark[this.i_points] = L.marker(this.points[this.i_points], {icon: pointerIcon}).addTo(map.leafletElement);
            this.layers_mark[this.i_points].on('click', this.click_mark, ['a']);
            this.i_points++;
        }
    }

    click_mark = (evt) => {

        this.layers_polygon[this.i_polygons] = L.polygon(this.points, {
            color: 'red'
        }).addTo(this.mapRef.current.leafletElement);
        for (var i = this.i_points - 1; i >= 0; i--) {
            this.layers_mark[i].remove();
        }
        this.points = [];
        this.i_points = 0;
        this.i_polygons++;

    }
  
    render() {
      const marker = this.state.hasLocation ? (
        <Marker position={this.state.latlng}>
          <Popup>You are here</Popup>
        </Marker>
      ) : null
  
      return (
        <Map 
          id="mapid" 
          center={[0, 0]} 
          zoom={3} 
          maxBounds={new L.LatLngBounds([0.7,1.4], [85,300])}
          minZoom={2}
          maxZoom={5}
          ref={this.mapRef}
          onClick={this.onMapClick}
      
          >
          <ImageOverlay 
            url="./assets/map-test-tile.jpg" 
            bounds={[[0.7,1.4], [85,300]]}
            
          />
        </Map>
      )
    }
  }
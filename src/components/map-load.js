// @flow

import React, { createRef, Component} from 'react'
import { Map, ImageOverlay } from 'react-leaflet'

import ImageTile from './image-tile'

export const pointerIcon = new L.Icon({
    iconUrl: '../assets/interface.svg',
    iconRetinaUrl: '../assets/interface.svg',
    //iconAnchor: [5, 55],
    //popupAnchor: [10, -44],
    iconSize: [25, 55],
    //shadowUrl: '../assets/marker-shadow.png',
    //shadowSize: [68, 95],
    //shadowAnchor: [20, 92],
  })
  
type State = { 
    hasLocation: boolean,
    imageUrl: String,
    latlng: {
      lat: number,
      lng: number,
    },
  }  

export default class MapLoad extends Component<{}, State> {
    state = {
      hasLocation: false,
      imageUrl:"./assets/rpgcast_01.jpg",
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
          console.log(e.latlng);
          this.points[this.i_points] = e.latlng;
          this.layers_mark[this.i_points] = L.marker(this.points[this.i_points], {icon: pointerIcon}).addTo(map.leafletElement);
          this.layers_mark[this.i_points].on('click', this.click_mark, ['a']);
          this.i_points++;
      }
    }


    onRegionClick = (e) => {
      e.originalEvent.preventDefault();
    }

    click_mark = (evt) => {
      console.log(this.points)
      this.layers_polygon[this.i_polygons] = L.polygon(this.points, {
          color: 'red'
      }).addTo(this.mapRef.current.leafletElement).on('click', this.onRegionClick);
      for (var i = this.i_points - 1; i >= 0; i--) {
          this.layers_mark[i].remove();
      }
      this.points = [];
      this.i_points = 0;
      this.i_polygons++;

    }

    getBounds = () => {

      return [[0,0], [85,300]];
    }

    onChangeHandler=event=>{
      this.setState({
        hasLocation:true,
        imageUrl: event.target.files[0]
      })
    }

    render() {
      //console.log(this.state.imageUrl)
      if(this.state.hasLocation){
        return (
          <Map 
            id="mapid" 
            center={[0, 0]} 
            zoom={1} 
            maxBounds={new L.LatLngBounds([0,0], [100,300])}
            //minZoom={2}
            //maxZoom={7}
            ref={this.mapRef}
            onClick={this.onMapClick}
        
            >
            <ImageTile 
              src= {this.state.imageUrl}
            />
          </Map>
        )
      }
      else{
        return(
          <div style={{textAlign: 'center', lineHeight: '50'}}>
            <input type="file" name="file" onChange={this.onChangeHandler}/>
          </div>
        )
      }
    }
  }
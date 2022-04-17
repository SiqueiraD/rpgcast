//import { Control } from "react-leaflet";

import { Handler, LeafletEvent, LeafletEventHandlerFn } from "leaflet"
import Leaflet from "leaflet"
import React, { FC } from "react"
import { useState } from "react"
import { useMap } from "react-leaflet"
import RadioCustomControl from "../UI/RadioCustomControl"
import arrowCursor from './arrowCursor.svg'
import draggingCursor from './draggingCursor.svg'
import { isNoSubstitutionTemplateLiteral } from "typescript"

function zoomOff(e: LeafletEvent) {
  console.log('cancela ZOOM')
  return
}

function CursorControl() {
  const [selected, setSelected] = useState(draggingCursor)
  console.log('CursorControl')
  const [styleImg, setStyleImg] = useState({ height: 50, paddingTop: 5, padding: 5, margin: 5, border: '1px red' })
  const map = useMap()
  // map.dragging
  const altText = ""
  function ImageButton(prop: { src: string, alt: string, }) {
    //map.dragging = new Handler(map)
    return (
      <img src={prop.src} alt={prop.alt}
        style={styleImg}
        onClick={() => {
          setSelected(prop.src)
          if (prop.src == arrowCursor) {
            map.dragging.disable()
            map.doubleClickZoom.disable()
            map.boxZoom.disable()
            map.scrollWheelZoom.disable()
            map.zoomControl.remove()
          }
          if (prop.src == draggingCursor) {
            map.dragging.enable()
            map.doubleClickZoom.enable()
            map.boxZoom.enable()
            map.scrollWheelZoom.enable()
            map.zoomControl.addTo(map)
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


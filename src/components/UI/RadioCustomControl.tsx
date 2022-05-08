import { useState } from "react"
import { useMap } from "react-leaflet"



function RadioCustomControl(prop: { placeholder?: JSX.Element, selected?: JSX.Element, options: JSX.Element[] }) {
  const [showSection, setShowSection] = useState("leaflet-control-layers leaflet-control")
  const map = useMap()
  return (
    <div className="leaflet-bottom leaflet-left"
      onMouseEnter={() => { setTimeout(() => setShowSection('leaflet-control-layers leaflet-control leaflet-control-layers-expanded'), 200) }}
      onMouseLeave={(e) => { setTimeout(() => setShowSection('leaflet-control-layers leaflet-control'), 500) }}>
      <div className={showSection} aria-haspopup="true">
        { showSection == 'leaflet-control-layers leaflet-control' &&
          (<a href="#" title="Layers" >
            {prop.placeholder}
          </a>
          ||
          <a className="leaflet-control-layers-toggle" href="#" title="Layers" >
          </a>)
        }
        <section className="leaflet-control-layers-list" >
          <div className="leaflet-control-layers-base">
            {prop.options}
          </div>
        </section>
      </div>
    </div>
  )
}

export default RadioCustomControl;
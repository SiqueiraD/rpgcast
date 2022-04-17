import { LatLng } from "leaflet";
import { useState } from "react";
import { useMap } from "react-leaflet";


function ButtonTopRightControl(prop: { showView: string, setShowView: any}) {
  console.log('ButtonTopRightControl')
    const map = useMap();
    const [showSection, setShowSection] = useState("leaflet-control-layers leaflet-control")
  
    function RadioChoiceView(props: { nameView: string, textView: string }) {
      return (
        <div onClick={(e) => {
          prop.setShowView(props.nameView)
        }} >
          {prop.showView === props.nameView ?
            <input type="radio" className="leaflet-control-layers-selector" name="leaflet-base-layers_64" defaultChecked /> :
            <input type="radio" className="leaflet-control-layers-selector" name="leaflet-base-layers_64" />}
          {/* <input type="radio" className="leaflet-control-layers-selector" name="leaflet-base-layers_64" /> */}
          <span> {props.textView}
          </span>
        </div>)
    }
  
    return (
      <div className="leaflet-top leaflet-right"
        onMouseEnter={() => { setTimeout(() => setShowSection('leaflet-control-layers leaflet-control leaflet-control-layers-expanded'), 200) }}
        onMouseLeave={(e) => { setTimeout(() => setShowSection('leaflet-control-layers leaflet-control'), 500) }}>
        <div className={showSection} aria-haspopup="true">
          <a className="leaflet-control-layers-toggle" href="#" title="Layers" >
          </a>
          <section className="leaflet-control-layers-list" >
            <div className="leaflet-control-layers-base">
              <label>
                <RadioChoiceView nameView={'TabuleiroQuimica'} textView={'Jogo tabuleiro (QUIMICA)'} />
              </label>
              <label>
                <RadioChoiceView nameView={'MapaComum'} textView={'Mapa Comum'} />
              </label>
              <label>
                <RadioChoiceView nameView={'RPGMapa'} textView={'Jogo RPG (Mapainkarnate.com)'} />
              </label>
              <label>
                <RadioChoiceView nameView={'TabuleiroMonopoly'} textView={'Jogo tabuleiro (Monopoly)'} />
              </label>
              <label>
                <RadioChoiceView nameView={'TabuleiroKapital'} textView={'Jogo tabuleiro (Kapital)'} />
              </label>
            </div>
          </section>
        </div>
      </div>
    )
  }

  export default ButtonTopRightControl;
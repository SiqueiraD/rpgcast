import { latLng, LatLng } from "leaflet";
import { useMap } from "react-leaflet";
import MapaComum from "./examples/MapaComum";
import RPGMapa from "./examples/RPGMapa";
import TabuleiroKapital from "./examples/TabuleiroKapital";
import TabuleiroMonopoly from "./examples/TabuleiroMonopoly";
import TabuleiroQuimica from "./examples/TabuleiroQuimica";


function EscolhePlanoFundo(showView: string) {
    console.log('escolhePlanoFundo: '+showView)
    const map = useMap();
    map.setMaxZoom(8)
    map.setZoom(2)
    switch (showView) {
        case 'MapaComum':
            map.setMaxZoom(22)
            //map.setView(prop.center, 15)
            return MapaComum()
        case 'TabuleiroMonopoly':
            return TabuleiroMonopoly()
        case 'TabuleiroKapital':
            return TabuleiroKapital()
        case 'RPGMapa':
            return RPGMapa()
        case 'TabuleiroQuimica':
            return TabuleiroQuimica()
    }
    return null;
}

function RenderPlanoFundo(
    prop: {
        showView: string,
    }) {
    console.log('RenderPlanoFundo')
    return (<>
        {EscolhePlanoFundo(prop.showView)}
    </>)
}


export default RenderPlanoFundo;


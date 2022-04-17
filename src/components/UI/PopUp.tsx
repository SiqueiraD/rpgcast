import { LatLng, Map, Popup } from "leaflet";
import { Component } from "react";
import { useMap } from "react-leaflet";

// type Props = {
//     map: Map, 
//     latLng: LatLng
// }

// export class PoPup extends Component<Props> {
//     render() {
//         let p = new Popup({})
//         try {
//             p.setLatLng(this.props.latLng)
//             .setContent(this.props.)
//             .openOn(this.props.map)
//         } catch (error) {
//             console.log('deu ruim no popup, irmao')
//         }

//         return null
//     }

// }


function PopUp(props: {map: Map, latLng: LatLng, children: string}){
    let p = new Popup({})
    try {
        p.setLatLng(props.latLng)
        .setContent(props.children)
        .openOn(props.map)
    } catch (error) {
        console.log('deu ruim no popup, irmao')
    }


    return null
}

export default PopUp;

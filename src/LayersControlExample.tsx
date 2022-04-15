import {
    Circle,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    MapContainer,
    Marker,
    Popup,
    Rectangle,
    TileLayer,
} from 'react-leaflet'
import { GridLayer, Icon } from 'leaflet';


export function LayersControlExample() {
    return (
        <LayersControl position="topright">
            <LayersControl.Overlay checked name="Marker with popup">
                <Marker  position={[-22.899103572367217, -43.119889846284465]}  icon={new Icon({ iconSize:[25,40], iconAnchor:[13,40], iconUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F23-230399_google-maps-pin-png-red-map-marker-png.png&f=1&nofb=1"})}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay  name="Layer group with circles">
                <LayerGroup>
                    <Circle
                        center={[-22.910485521891108, -43.1257244777789]}
                        pathOptions={{ fillColor: 'blue' }}
                        radius={200}
                    />
                    <Circle
                        center={[-22.91095974905452, -43.13087268203867]}
                        pathOptions={{ fillColor: 'red' }}
                        radius={100}
                        stroke={false}
                    />
                    <LayerGroup>
                        <Circle
                            center={[-22.912856641118868, -43.12795536629146]}
                            pathOptions={{ color: 'purple', fillColor: 'green' }}
                            radius={100}
                        />
                    </LayerGroup>
                </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Feature group">
                <FeatureGroup pathOptions={{ color: 'green' }}>
                    <Popup>Popup in FeatureGroup</Popup>
                    <Circle center={[-22.90455754238924, -43.127011528843845]} radius={200} />
                    <Rectangle bounds={[
                        [-22.902739576751294, -43.13662151012878],
                        [-22.902067713717685, -43.13177361778414],
                    ]} />
                </FeatureGroup>
            </LayersControl.Overlay>
        </LayersControl>
    )
} 

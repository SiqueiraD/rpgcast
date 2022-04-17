import { LatLng, Polygon } from "leaflet";
import { TileLayer, useMap } from "react-leaflet";
import Parse from 'parse';
import Config from './../Config'
import PopUp from '../components/UI/PopUp'

async function testParse() {
    return PopUp
//   Parse.initialize(Config.PARSE_APPLICATION_ID, Config.PARSE_JAVASCRIPT_KEY);
//   Parse.serverURL = Config.PARSE_HOST_URL;

//   const myNewObject = new Parse.Object('Mapa');
//   myNewObject.set('jsonInicial', { foo: 'bar' });
//   myNewObject.set('createdBy', Parse.User.current());
//   try {
//     //const result = await myNewObject.save();
//     //// Access the Parse Object attributes using the .GET method
//     //console.log('Mapa created', result);
//   } catch (error) {
//     console.error('Error while creating Mapa: ', error);
//   }
}


let predef_polygon: Polygon[] = [];
let i_predef_polygons = 0;
function Gragoata() {
    const map = useMap()
    if (i_predef_polygons === 0) {
        var grags = '[[{"lat":-22.90118683637209,"lng":-43.135880827903755},{"lat":-22.901275784789366,"lng":-43.13497424125672},{"lat":-22.900198516699678,"lng":-43.13264608383179},{"lat":-22.89988719451135,"lng":-43.13214719295502},{"lat":-22.898770382051634,"lng":-43.13141226768494},{"lat":-22.89772274430632,"lng":-43.130704164505005},{"lat":-22.89716927204246,"lng":-43.12984049320221},{"lat":-22.89671957416535,"lng":-43.128912448883064},{"lat":-22.896368709951233,"lng":-43.12820971012116},{"lat":-22.896235282476713,"lng":-43.12751233577729},{"lat":-22.895726280165057,"lng":-43.1275498867035},{"lat":-22.895558259565277,"lng":-43.128987550735474},{"lat":-22.89504431290948,"lng":-43.12908411026002},{"lat":-22.895587910274465,"lng":-43.12925040721894},{"lat":-22.89616609780864,"lng":-43.13079535961152},{"lat":-22.896966661095544,"lng":-43.13348829746247},{"lat":-22.89769309406371,"lng":-43.13567161560059},{"lat":-22.89817738054803,"lng":-43.13556969165803},{"lat":-22.898696257005454,"lng":-43.135462403297424},{"lat":-22.899600579801465,"lng":-43.13525855541229},{"lat":-22.900445597292933,"lng":-43.13564479351044}]]';
        var j1 = JSON.parse(grags);
        predef_polygon[i_predef_polygons] = new Polygon(j1, {
            color: 'purple',
            
        });
        //var lasda =pol.getPane('plano-fundo')
        predef_polygon[i_predef_polygons].on('click',testParse);
        predef_polygon[i_predef_polygons].addTo(map);
        i_predef_polygons++;
    }
    return null
}

function MapaComum() {
    console.log('MapaComum')
    const map = useMap();
    map.setView(new LatLng(-22.90309921448796, -43.12773227691651), 15)
    //setCenterPos(new LatLng(-22.90309921448796, -43.12773227691651))
    return (
        <>
            <TileLayer
                //pane='plano-fundo'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxNativeZoom={19}
                maxZoom={22}
            />
            <Gragoata />
        </>
    )
}
export default MapaComum;
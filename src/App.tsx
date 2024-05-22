import './App.css';
import { Layout } from './components/layout.tsx';
import { useMarkers } from './api/provider.tsx';
import 'leaflet/dist/leaflet.css';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import { LatLngExpression, divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import Person from '@mui/icons-material/Person';
import Home from '@mui/icons-material/Home';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';
import Flight from '@mui/icons-material/Flight';
import { IconType } from './api';
import { Ruler } from './components/ruler.tsx';

const defaultCenter: LatLngExpression = {
  lat: 31.96,
  lng: 51.41,
};

const iconLookup: Record<IconType, typeof SvgIcon> = {
  car: DirectionsCar,
  home: Home,
  person: Person,
  plane: Flight,
};

function App() {
  const { markers } = useMarkers();

  // centering by first available marker
  const center: LatLngExpression =
    markers.length === 0
      ? defaultCenter
      : { lat: markers[0].lat, lng: markers[0].lng };

  return (
    <MapContainer zoom={13} center={center}>
      <Layout>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {markers.map(({ lat, lng, id, title, icon }) => {
            const IconComponent = iconLookup[icon];

            return (
              <Marker
                position={[lat, lng]}
                key={id}
                {...(IconComponent && {
                  icon: divIcon({
                    iconSize: [26, 26],
                    html: renderToStaticMarkup(<IconComponent />),
                  }),
                })}
              >
                <Popup>{title}</Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </Layout>
      <Ruler />
    </MapContainer>
  );
}

export default App;

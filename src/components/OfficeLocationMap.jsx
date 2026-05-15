import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HYDERABAD = [17.385412, 78.487114];

const pinIcon = L.divIcon({
  className: 'office-map-pin',
  html: '<div class="office-map-pin__dot"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const OfficeLocationMap = () => (
  <MapContainer
    center={HYDERABAD}
    zoom={12}
    className="office-location-map h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 shrink-0 rounded-[20px] overflow-hidden border border-black/[0.06] shadow-sm"
    zoomControl={false}
    attributionControl={false}
    scrollWheelZoom={false}
    dragging={false}
    doubleClickZoom={false}
    touchZoom={false}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
    <Marker position={HYDERABAD} icon={pinIcon} />
  </MapContainer>
);

export default OfficeLocationMap;

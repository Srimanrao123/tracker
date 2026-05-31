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
    className="office-location-map h-[3.75rem] w-[3.75rem] sm:h-[4.25rem] sm:w-[4.25rem] shrink-0 rounded-2xl overflow-hidden border border-black/[0.08] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] ring-2 ring-white"
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

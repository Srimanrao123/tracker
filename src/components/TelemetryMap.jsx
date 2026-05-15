import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const trackerIcon = L.divIcon({
  className: 'telemetry-map-marker',
  html: `
    <div class="telemetry-map-marker__ping" aria-hidden="true"></div>
    <div class="telemetry-map-marker__shell" aria-hidden="true">
      <div class="telemetry-map-marker__core" aria-hidden="true"></div>
    </div>
  `,
  iconSize: [56, 56],
  iconAnchor: [28, 28],
});

function MapViewSync({ lat, lng }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lng], map.getZoom(), { duration: 1.2 });
  }, [lat, lng, map]);

  return null;
}

const TelemetryMap = ({ lat, lng }) => (
  <MapContainer
    center={[lat, lng]}
    zoom={13}
    className="telemetry-map h-full w-full"
    zoomControl={false}
    attributionControl={false}
    scrollWheelZoom={false}
    dragging
    doubleClickZoom={false}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      maxZoom={19}
    />
    <MapViewSync lat={lat} lng={lng} />
    <Marker position={[lat, lng]} icon={trackerIcon} />
  </MapContainer>
);

export default TelemetryMap;

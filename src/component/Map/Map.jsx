import React, { useEffect, useState } from "react";
import { useHotels } from "../../Providers/HotelProvider";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";

import useGeoLocation from "../../hooks/useLocation";
// import useGeoLocation from "../../hooks/useGeoLocation";
function Map({hotels , isLoading}) {
 
  const [mapCenter, setMapCenter] = useState([51, 3]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const {
    isLoading: geoIsLoading,
    getPosition,
    position: geoPosition,
  } = useGeoLocation();
  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);
  useEffect(() => {
    if (geoPosition.lat && geoPosition.lng)
      setMapCenter([geoPosition.lat, geoPosition.lng]);
  }, [geoPosition]);
  return (
    <div className="mapContainer">
      <MapContainer
        className="map"
        center={mapCenter}
        zoom={12}
        scrollWheelZoom={true}
      >
        <button onClick={getPosition} className="getLocation">
          {" "}
          {isLoading ? "Loading..." : "Your Location"}
        </button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Detectclick />
        <ChangeCenter position={mapCenter} />
        {hotels.map((item) => {
          return (
            <Marker key={item.id} position={[item.latitude, item.longitude]}>
              <Popup>{item.host_location}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
};

function Detectclick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`/bookmark/add/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}

import React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox() {
  return (
    <div style={{ height: '100%', width: '100%', overflowY: 'hidden' }}>
      <Map
        mapLib={import('mapbox-gl')}
        initialViewState={{
          longitude: 78.476681027237,
          latitude: 22.1991660760527,
          zoom: 6
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/akhilbaratam/clufdu7ov00ev01r278i3anuy"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Add markers, popups, or other map elements here */}
      </Map>
    </div>
  );
}

export default Mapbox;
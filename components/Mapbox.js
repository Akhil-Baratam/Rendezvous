import React from 'react';
import Map from 'react-map-gl';

function Mapbox() {

  return (
    <div style={{ height: '100%', width: '100%', overflowY: 'hidden' }}>
      <Map
        mapLib={import('mapbox-gl')}
        initialViewState={{
          longitude: -122.4376,
          latitude: 37.7577,
          zoom: 11
        }}
        mapboxAccessToken='pk.eyJ1IjoiYWtoaWxiYXJhdGFtIiwiYSI6ImNsdWZlZWE5ZzFiMngybG56eDIzZ3dydGcifQ.JLN5dwERKhAuB79QoxASnw'
        mapStyle="mapbox://styles/akhilbaratam/clufdu7ov00ev01r278i3anuy"
      />
    </div>
  );
}

export default Mapbox;

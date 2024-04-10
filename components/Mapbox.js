import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Map from 'react-map-gl';

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
        mapboxAccessToken='pk.eyJ1IjoiYWtoaWxiYXJhdGFtIiwiYSI6ImNsdWZlZWE5ZzFiMngybG56eDIzZ3dydGcifQ.JLN5dwERKhAuB79QoxASnw'
        mapStyle="mapbox://styles/akhilbaratam/clufdu7ov00ev01r278i3anuy"
        cursor='grab'
      />
    </div>
  );
}

// function Mapbox() {
//   const [viewport, setViewport] = useState({
//     width: "100%",
//     height: "100%",
//     longitude: -122.4376,
//     latitude: 37.7577,
//     zoom: 9          
//   });

//   return (
//       <ReactMapGL
//         // mapLib={import('mapbox-gl')}
//         mapboxAccessToken='pk.eyJ1IjoiYWtoaWxiYXJhdGFtIiwiYSI6ImNsdWZlZWE5ZzFiMngybG56eDIzZ3dydGcifQ.JLN5dwERKhAuB79QoxASnw'
//         mapStyle="mapbox://styles/akhilbaratam/clufdu7ov00ev01r278i3anuy"
//         {...viewport}
//         onViewportChange={(nextViewport) => setViewport(nextViewport)}
//         cursor='grab'
//       ></ReactMapGL>
//   );
// }

export default Mapbox;

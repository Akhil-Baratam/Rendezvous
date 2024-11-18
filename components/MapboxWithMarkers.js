import React, { useEffect, useState, useCallback } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapboxWithMarkers({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [viewState, setViewState] = useState({
    longitude: 78.96288,
    latitude: 20.593684,
    zoom: 4
  });

  const fitBounds = useCallback(() => {
    if (posts.length > 0) {
      const coordinates = posts.map(post => [post.longitude, post.latitude]);
      const bounds = coordinates.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

      setViewState({
        ...viewState,
        longitude: bounds.getCenter().lng,
        latitude: bounds.getCenter().lat,
        zoom: 4,
        transitionDuration: 1000
      });
    }
  }, [posts]);

  useEffect(() => {
    fitBounds();
  }, [fitBounds]);

  return (
    <div style={{ height: '100%', width: '100%', overflowY: 'hidden' }}>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/akhilbaratam/clufdu7ov00ev01r278i3anuy"
        style={{ width: "100%", height: "100%" }}
      >
        {posts.map((post) => (
          <Marker
            key={post.id}
            longitude={post.longitude}
            latitude={post.latitude}
            anchor="bottom"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setSelectedPost(post);
            }}
          >
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer">
              {post.id}
            </div>
          </Marker>
        ))}

        {selectedPost && (
          <Popup
            longitude={selectedPost.longitude}
            latitude={selectedPost.latitude}
            anchor="top"
            onClose={() => setSelectedPost(null)}
          >
            <div>
              <h3 className="font-bold">{selectedPost.title}</h3>
              <p>{selectedPost.description}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapboxWithMarkers;
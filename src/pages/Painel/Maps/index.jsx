import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './index.css';

// doc: https://www.npmjs.com/package/@react-google-maps/api
const MapPage = ({ latitude, longitude, zoom, label }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return (
    <div className='mapStyle'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: latitude, lng: longitude }}
          zoom={zoom}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;

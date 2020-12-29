import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Pin } from './Pin';
import styles from '../styles/map.module.css';

export const Map = ({ country, lat, lng }) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: Number(lat),
    longitude: Number(lng),
    zoom: 14.5,
    bearing: 0,
    pitch: 0,
    interactive: false,
  });
  const [settings, setSettings] = useState({
    dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,
    doubleClickZoom: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85,
  });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ReactMapGL
      {...settings}
      {...viewport}
      onViewportChange={newViewport => setViewport(newViewport)}
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      <Marker key={Number(lat)} latitude={Number(lat)} longitude={Number(lng)}>
        <div className={styles.pinMapbox}>
          <Pin size={41} offsetLeft={-41} offsetTop={34} />
        </div>
      </Marker>
    </ReactMapGL>
  );
};

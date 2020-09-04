import React, { useState, useEffect } from 'react';
import { Map, CircleMarker, Popup, TileLayer } from 'react-leaflet';

import { fetchLocationData } from '../../api-handler/index';
import TopBar from '../TopBar/TopBar';

import './globe.css';

const Globe = () => {
  const [locData, setLocData] = useState([]);
  const [location, setLocation] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchLocationData();
      setLocData(fetchedData);
    }
    fetchAPI();
  }, []);
  console.log(locData);
  return (
    <>
      <TopBar />
      <Map center={[8, 0]} zoom={2.3}>
        <TileLayer
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {locData.slice(0, 10).map(item =>
          <CircleMarker
            key={item.countryInfo._id}
            center={[
              item.countryInfo.lat,
              item.countryInfo.long
            ]}
            onClick={() => setLocation(item)}
            radius={24}
            color={'red'}
          />
        )}
        {locData.slice(10, 20).map(item =>
          <CircleMarker
            key={item.countryInfo._id}
            center={[
              item.countryInfo.lat,
              item.countryInfo.long
            ]}
            onClick={() => setLocation(item)}
            radius={14}
            color={'orange'}
          />
        )}
        {locData.slice(20, locData.length + 1).map(item =>
          <CircleMarker
            key={item.countryInfo._id}
            center={[
              item.countryInfo.lat,
              item.countryInfo.long
            ]}
            onClick={() => setLocation(item)}
            radius={8}
            color={'green'}
          />

        )}

        {location && (
          <Popup
            position={[
              location.countryInfo.lat,
              location.countryInfo.long
            ]}
            onClose={() => setLocation(false)}
          >
            <div>
              <h2>{location.country}</h2>
              <p>Cases:&nbsp;{location.cases.toLocaleString()}</p>
              <p>Deaths:&nbsp;{location.deaths.toLocaleString()}</p>
              <p>Active:&nbsp;{location.active.toLocaleString()}</p>
              <p>Recovered:&nbsp;{location.recovered.toLocaleString()}</p>
              <p>Critical:&nbsp;{location.critical.toLocaleString()}</p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  )
};

export default Globe;
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
      <Map center={[0, 0]} zoom={2.5}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
            radius={12}
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
            radius={6}
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
              <p>Cases:&nbsp;{location.cases}</p>
              <p>Deaths:&nbsp;{location.deaths}</p>
              <p>Active:&nbsp;{location.active}</p>
              <p>Recovered:&nbsp;{location.recovered}</p>
              <p>Critical:&nbsp;{location.critical}</p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  )
};

export default Globe;
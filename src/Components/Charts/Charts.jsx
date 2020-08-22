import React, { useState, useEffect } from 'react';
import { Line, HorizontalBar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import { fetchDailyData, fetchWorldDailyData, fetchCurrentData } from '../../api-handler/index';

import styles from './Charts.module.css';

const Charts = ({ country }) => {
  const [dailyData, setDailyData] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [worldDailyData, setWorldData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
      setCurrentData(await fetchCurrentData());
      setWorldData(await fetchWorldDailyData());
    }
    fetchData();
  }, [])

  const worldLineGraph = (
    worldDailyData.length
      ? (<Line
        data={{
          labels: worldDailyData.map(items => new Date(items.reportDate).toDateString()),
          datasets: [{
            data: worldDailyData.map(items => items.totalConfirmed),
            label: 'Confirmed',
            borderColor: '#FFA500',
            backgroundColor: 'rgba(255,165,0, 0.3)',
            fill: 'origin'
          }, {
            data: worldDailyData.map(items => items.deaths.total),
            label: 'Deaths',
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255,0,0, 0.3)',
            fill: 'origin'
          }, {
            data: worldDailyData.map(items => {
              return items.totalConfirmed - items.deaths.total;
            }),
            label: 'Active / Recovered',
            borderColor: '#8A2BE2',
            backgroundColor: 'rgba(138,43,226, 0.3)',
            fill: 'origin'
          }]
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }} />)
      : null
  )

  const sgLineGraph = (
    dailyData.length
      ? (<Line
        data={{
          labels: dailyData.map(items => new Date(items.Date).toDateString()),
          datasets: [{
            data: dailyData.map(items => items.Confirmed),
            label: 'Confirmed',
            borderColor: '#FFA500',
            backgroundColor: 'rgba(255,165,0, 0.3)',
            fill: 'origin'
          }, {
            data: dailyData.map(items => items.Deaths),
            label: 'Deaths',
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255,0,0, 0.3)',
            fill: 'origin'
          }, {
            data: dailyData.map(items => items.Recovered),
            label: 'Recovered',
            borderColor: '#00FF7F',
            backgroundColor: 'rgba(0,255,127, 0.3)',
            fill: 'origin'
          }, {
            data: dailyData.map(items => items.Active),
            label: 'Active',
            borderColor: '#FFFF00',
            backgroundColor: 'rgba(255,255,0, 0.3)',
            fill: 'origin'
          }]
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true
        }} />)
      : null
  )

  const sgBarGraph = (
    currentData ? (
      <HorizontalBar
        data={{
          labels: ['Confirmed', 'Recovered', 'Active', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255,165,0, 0.5)', 'rgba(0,255,127, 0.5)', 'rgba(255,255,0, 0.5)', 'rgba(255, 0, 0, 0.3)'],
              data: [currentData.infected, currentData.recovered, currentData.active, currentData.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false }
        }}
      />
    ) : null
  )

  return (
    <>
      <div className={styles.container}>
        <Typography variant='h5' align='center'>🌎 Line Chart</Typography>
        {worldLineGraph}
      </div>
      <div className={styles.container}>
        <Typography variant='h5' align='center'>🇸🇬 Line Chart</Typography>
        {sgLineGraph}
      </div>
      <div className={styles.container}>
        <Typography variant='h5' align='center'>🇸🇬 Bar Chart</Typography>
        {sgBarGraph}
      </div>
    </>
  )
}

export default Charts;
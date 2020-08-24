import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, CardContent, Card, Grid } from '@material-ui/core';
import { fetchWorldDailyData } from '../../api-handler/index';

import styles from './Charts.module.css';

const Charts = () => {
  const [worldDailyData, setWorldData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

  return (
    <>
      <div className={styles.container}>
        <Grid alignItems='center' direction='row'>
          <Grid item component={Card} className={styles.card}>
            <Typography variant='h5' align='center'>World Trends 🌎</Typography>
            {worldLineGraph}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Charts;
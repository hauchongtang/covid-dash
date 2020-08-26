import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Card, Grid, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { fetchWorldDailyData } from '../../api-handler/index';

const useStyles = makeStyles({
  container: {
    display: 'flexbox',
    textAlign: 'center',
    width: '100%',
    justifyItems: 'center',
    marginLeft: '10%',
  },
  card: {
    float: 'none',
    padding: '2%',
    width: '80%',
    marginTop: '1% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(0,225,0, 0.1)'
  },
})

const Charts = () => {
  const [worldDailyData, setWorldData] = useState([]);

  const styles = useStyles();

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
          labels: worldDailyData.map(items => new Date(items.last_update).toDateString()),
          datasets: [{
            data: worldDailyData.map(items => items.total_cases),
            label: 'Confirmed',
            borderColor: '#FFA500',
            backgroundColor: 'rgba(255,165,0, 0.3)',
            fill: 'origin'
          }, {
            data: worldDailyData.map(items => items.total_deaths),
            label: 'Deaths',
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255,0,0, 0.3)',
            fill: 'origin'
          }, {
            data: worldDailyData.map(items => {
              return items.total_recovered;
            }),
            label: 'Recovered',
            borderColor: '#00FF7F',
            backgroundColor: 'rgba(0,255,127, 0.3)',
            fill: 'origin'
          }, {
            data: worldDailyData.map(items => {
              return items.total_cases - items.total_deaths - items.total_recovered;
            }),
            label: 'Active',
            borderColor: '#FFFF00',
            backgroundColor: 'rgba(255,255,0, 0.3)',
            fill: 'origin'
          }]
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          scales: {
            xAxes: [{
              ticks: {
                display: true
              }
            }]
          }
        }} />)
      : <LinearProgress />
  )

  return (
    <>
      <div className={styles.container}>
        <Grid alignItems='center' direction='row'>
          <Grid item component={Card} className={styles.card}>
            <Typography variant='h5' align='center'><span role="img" aria-label="world" id="earth">🌎</span> Trend </Typography>
            {worldLineGraph}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Charts;
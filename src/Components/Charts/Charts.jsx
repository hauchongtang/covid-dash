import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Typography, Card, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { fetchWorldDailyData } from '../../api-handler/index';

const useStyles = makeStyles({
  container: {
    display: 'flexbox',
    textAlign: 'center',
    width: '80%',
    justifyItems: 'center',
  },
  card: {
    padding: '2%',
    width: '50%',
    marginTop: '0% !important',
    backgroundColor: 'rgb(92, 219, 149, 0.1)',
    borderRadius: '12px',
  },
  card1: {
    padding: '2%',
    width: '50%',
    marginTop: '0% !important',
    backgroundColor: 'rgb(92, 219, 149, 0.1)',
    borderRadius: '12px',
  },
  root: {
    marginTop: '0.5%',
    marginLeft: '10%',
    width: '80%',

  },
  more: {
    backgroundColor: 'rgb(92, 219, 149, 0.2)'
  }
})

const Charts = ({ data }) => {
  const [worldDailyData, setWorldData] = useState([]);

  const totalInfected = parseInt(data.totalConfirmed);
  const totalRecovered = parseInt(data.totalRecovered);
  const totalDeaths = parseInt(data.totalDeaths);
  const totalActive = parseInt(data.totalActiveCases);
  const total = totalInfected + totalDeaths + totalRecovered;
  const styles = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setWorldData(await fetchWorldDailyData());
    }
    fetchData();
  }, [])

  const worldBreakdown = (
    totalInfected ? (
      <Doughnut
        data={{
          labels: ['Infected', 'Recovered', 'Deaths', 'Active'],
          datasets: [{
            data: [totalInfected, totalRecovered, totalDeaths, totalActive],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(0, 225, 0, 0.5)"]
          }],

        }}
      />
    ) : null
  )

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
              type: 'time',
              ticks: {
                autoSkip: true,
                maxTicksLimit: 3
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 4
              }
            }]
          }
        }} />)
      : null
  )

  return (
    <>
      <Paper elevation={0} className={styles.root}>
        <Grid xs={12} lg={12} container justify='center' direction='row'>
          <Grid item component={Card} className={styles.card}>
            <Typography variant='button' align='center'>Trend</Typography>
            {worldLineGraph}
          </Grid>
          <Grid item component={Card} className={styles.card1}>
            <Typography variant='button' align='center'>Breakdown</Typography>
            {worldBreakdown}
            <Typography variant='button' align='center'>Death Rate: {(totalDeaths / total * 100).toFixed(2)}%</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Charts;
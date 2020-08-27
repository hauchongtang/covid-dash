import React, { useState, useEffect } from 'react';
import { Line, HorizontalBar, Doughnut } from 'react-chartjs-2';
import { Typography, Card, Grid, Paper } from '@material-ui/core';
import { fetchDailyData, fetchCurrentData, fetchSGData } from '../../api-handler/index';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from '../TopBar/TopBar';
import SGCards from '../Cards/SGCards';

const useStyles = makeStyles({
  container: {
    display: 'flexbox',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '0% !important',
  },
  root: {
    width: '80%',
    marginLeft: '10% !important',
    marginTop: '2% !important'
  },
  root1: {
    width: '80%',
    marginLeft: '10% !important',
    marginTop: '1% !important'
  },
  card: {
    width: '50%',
    padding: '2% !important',
    marginTop: '0% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(92, 219, 149, 0.1)',
  },
  card1: {
    width: '50%',
    padding: '2% !important',
    marginTop: '0% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(92, 219, 149, 0.1)',
  },
  card2: {
    width: '50%',
    padding: '2% !important',
    marginTop: '0% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(92, 219, 149, 0.1)',
  },
  card3: {
    width: '50%',
    padding: '2% !important',
    marginTop: '0% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(92, 219, 149, 0.1)',
  }
})

const Singapore = () => {
  const [dailyData, setDailyData] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [hospitalData, setHospitalData] = useState({});

  const styles = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
      setCurrentData(await fetchCurrentData());
      setHospitalData(await fetchSGData());
    }
    fetchData();
  }, [])

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
          responsive: true,
          scales: {
            xAxes: [{
              type: 'time',
              ticks: {
                autoSkip: true,
                maxTicksLimit: 4
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

  const hospitalBarGraph = (
    hospitalData ? (
      <HorizontalBar
        data={{
          labels: ['Community', 'Stable', 'Critical'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255,165,0, 0.5)', 'rgba(0,255,127, 0.5)', 'rgba(255,255,0, 0.5)'],
              data: [hospitalData.community, hospitalData.stable, hospitalData.critical]
            }
          ]
        }}
        options={{
          legend: { display: false }
        }}
      />) : null
  )

  const activeBreakdown = (
    hospitalData ? (
      <Doughnut
        data={{
          labels: ['Community', 'Stable', 'Critical'],
          datasets: [{
            data: [hospitalData.community, hospitalData.stable, hospitalData.critical],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
          }],

        }}
      />
    ) : null
  )

  return (
    <>
      <TopBar />
      <div className={styles.info}>
        <SGCards />
      </div>
      <Paper elevation={0} className={styles.root}>
        <Grid xs={12} container justify='center' direction='row'>
          <Grid item component={Card} className={styles.card}>
            <Typography variant='button' align='center'>Trend</Typography>
            {sgLineGraph}
          </Grid>
          <Grid item component={Card} className={styles.card1}>
            <Typography variant='button' align='center'>Summary</Typography>
            {sgBarGraph}
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} className={styles.root1}>
        <Grid xs={12} container alignItems='center'>
          <Grid item component={Card} className={styles.card2}>
            <Typography variant='button' align='center'>Breakdown of Active Cases</Typography>
            {activeBreakdown}
          </Grid>
          <Grid item component={Card} className={styles.card3}>
            <Typography variant='button' align='center'>{currentData.active} Active Cases in Hospital</Typography>
            {hospitalBarGraph}
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Singapore;
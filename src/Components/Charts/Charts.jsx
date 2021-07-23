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

const mockData = {
  "cases": {
    "3/21/20": 304507,
    "3/22/20": 336953,
    "3/23/20": 378231,
    "3/24/20": 418041,
    "3/25/20": 467653,
    "3/26/20": 529591,
    "3/27/20": 593291,
    "3/28/20": 660693,
    "3/29/20": 720140,
    "3/30/20": 782389,
    "3/31/20": 857487,
    "4/1/20": 932605,
    "4/2/20": 1013466,
    "4/3/20": 1095917,
    "4/4/20": 1176060,
    "4/5/20": 1249754,
    "4/6/20": 1321481,
    "4/7/20": 1396476,
    "4/8/20": 1480202,
    "4/9/20": 1565278,
    "4/10/20": 1657526,
    "4/11/20": 1735650,
    "4/12/20": 1834721,
    "4/13/20": 1904838,
    "4/14/20": 1976191,
    "4/15/20": 2056054,
    "4/16/20": 2152437,
    "4/17/20": 2240190,
    "4/18/20": 2317758,
    "4/19/20": 2401378
  },
  "deaths": {
    "3/21/20": 12973,
    "3/22/20": 14651,
    "3/23/20": 16505,
    "3/24/20": 18625,
    "3/25/20": 21181,
    "3/26/20": 23970,
    "3/27/20": 27198,
    "3/28/20": 30652,
    "3/29/20": 33925,
    "3/30/20": 37582,
    "3/31/20": 42107,
    "4/1/20": 47180,
    "4/2/20": 52983,
    "4/3/20": 58787,
    "4/4/20": 64606,
    "4/5/20": 69374,
    "4/6/20": 74565,
    "4/7/20": 81937,
    "4/8/20": 88338,
    "4/9/20": 95521,
    "4/10/20": 102525,
    "4/11/20": 108502,
    "4/12/20": 114090,
    "4/13/20": 119481,
    "4/14/20": 125983,
    "4/15/20": 134176,
    "4/16/20": 143800,
    "4/17/20": 153821,
    "4/18/20": 159509,
    "4/19/20": 165043
  },
  "recovered": {
    "3/21/20": 91682,
    "3/22/20": 97889,
    "3/23/20": 98341,
    "3/24/20": 107890,
    "3/25/20": 113604,
    "3/26/20": 121966,
    "3/27/20": 130659,
    "3/28/20": 138949,
    "3/29/20": 148616,
    "3/30/20": 164100,
    "3/31/20": 176442,
    "4/1/20": 191853,
    "4/2/20": 208528,
    "4/3/20": 223621,
    "4/4/20": 243575,
    "4/5/20": 257000,
    "4/6/20": 273259,
    "4/7/20": 296263,
    "4/8/20": 324507,
    "4/9/20": 348813,
    "4/10/20": 370241,
    "4/11/20": 395521,
    "4/12/20": 414599,
    "4/13/20": 440897,
    "4/14/20": 466051,
    "4/15/20": 502053,
    "4/16/20": 532409,
    "4/17/20": 557798,
    "4/18/20": 581355,
    "4/19/20": 612056
  }
}

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
  console.log(worldDailyData)

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
    30
      ? (<Line
        data={{
          labels: Object.keys(mockData.cases).map(items => new Date(items).toDateString()),
          datasets: [{
            data: Object.values(mockData.cases).map(items => items),
            label: 'Confirmed',
            borderColor: '#FFA500',
            backgroundColor: 'rgba(255,165,0, 0.3)',
            fill: 'origin'
          }, {
            data: Object.values(mockData.deaths).map(items => items),
            label: 'Deaths',
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255,0,0, 0.3)',
            fill: 'origin'
          }, {
            data: Object.values(mockData.recovered).map(items => {
              return items;
            }),
            label: 'Recovered',
            borderColor: '#00FF7F',
            backgroundColor: 'rgba(0,255,127, 0.3)',
            fill: 'origin'
          },]
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
            <Typography variant='button' align='center'>Work in Progess (Old Figures)</Typography>
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
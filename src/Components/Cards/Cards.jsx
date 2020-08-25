import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import { fetchTopDaily } from '../../api-handler/index';

import styles from './Cards.module.css';

const Cards = ({ data, date }) => {
  const totalInfected = parseInt(data.TotalConfirmed);
  const totalRecovered = parseInt(data.TotalRecovered);
  const totalDeaths = parseInt(data.TotalDeaths);
  const totalActive = totalInfected - totalDeaths - totalRecovered;
  const lastUpdated = new Date(date).toDateString();

  const [topData, setTopData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchTopDaily();
      setTopData(fetchedData);
    }
    fetchAPI();
  }, []);

  if (!totalInfected) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Confirmed</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalInfected} duration={2.5} separator="," />
            </Typography>
            <Typography color='textSecondary'>{lastUpdated}</Typography>
            <Typography variant='body2'>Number of infections</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Active</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalActive} duration={2.5} separator="," />
            </Typography>
            <Typography color='textSecondary'>{lastUpdated}</Typography>
            <Typography variant='body2'>Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalRecovered} duration={2.5} separator="," />
            </Typography>
            <Typography color='textSecondary'>{lastUpdated}</Typography>
            <Typography variant='body2'>Number of recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalDeaths} duration={2.5} separator="," />
            </Typography>
            <Typography color='textSecondary'>{lastUpdated}</Typography>
            <Typography variant='body2'>Number of fatalities</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Paper elevation={1} className={styles.root}>
        <Typography variant='h5' color='textSecondary' gutterBottom>Top 10 Daily Figures 📈 (Updated live)</Typography>
        {topData.map((item, index) => {
          return (
            <>
              <Typography variant='h6'>{index + 1}.&nbsp;{item.country}</Typography>
              <Typography color='primary'>Cases:&nbsp;{item.daily_cases}&nbsp;Deaths:&nbsp;{item.daily_deaths}</Typography>
            </>
          )
        })}
      </Paper>
    </div>
  )
}

export default Cards;
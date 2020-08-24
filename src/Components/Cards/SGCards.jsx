import React, { useEffect, useState } from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';
import { fetchCurrentData } from '../../api-handler';

const SGCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAPI = async () => {
      const sgData = await fetchCurrentData();
      setData(sgData);
    }
    getAPI()
  }, []);
  const totalInfected = data.infected;
  const totalRecovered = data.recovered;
  const totalDeaths = data.deaths;
  const totalActive = data.active;
  const lastUpdated = new Date().toDateString();

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
    </div>
  )
}

export default SGCards;
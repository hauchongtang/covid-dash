import React, { useEffect, useState } from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from "@material-ui/core/styles";

import { fetchCurrentData } from '../../api-handler';

const useStyles = makeStyles({
  container: {
    margin: 0,
    textAlign: 'center',
  },
  card: {
    margin: '2% !important',
    marginBottom: '0% !important',
    borderRadius: '12px',
  },
  root: {
    padding: '2% !important',
    margin: '10% !important',
    marginTop: '4% !important',
    marginBottom: '2% !important',
    textAlign: 'justify',
  },
  infected: {
    borderBottom: '20px solid orange',
    color: 'orange',
    backgroundColor: 'rgba(255,165,0, 0.1)',
  },
  active: {
    borderBottom: '20px solid turquoise',
    color: '#40E0D0',
    backgroundColor: 'rgb(64,224,208, 0.1)'
  },
  recovered: {
    borderBottom: '20px solid springgreen',
    color: 'green',
    backgroundColor: 'rgb(0,128,0, 0.1)'
  },
  deaths: {
    borderBottom: '20px solid red',
    color: 'red',
    backgroundColor: 'rgb(255, 0, 0, 0.1)'
  },
});

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

  const styles = useStyles();

  if (!totalInfected) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography gutterBottom>Confirmed</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalInfected} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography gutterBottom>Active</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalActive} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalRecovered} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalDeaths} duration={2.5} separator="," />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default SGCards;
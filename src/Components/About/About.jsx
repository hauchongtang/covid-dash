import React from 'react';
import { CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import TopBar from '../TopBar/TopBar';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  card: {
    margin: '2% !important',
    borderColor: 'transparent',
    textAlign: 'justify',
  },
})

const About = () => {
  const styles = useStyles();
  return (
    <>
      <TopBar />
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>We get our data from</Typography>
        <Button href='https://api.covid19api.com' target="_blank" color='secondary'>covid19api</Button>
        <Button href='https://covid19-api.org' target="_blank" color='secondary'>covid19-api</Button>
        <Button href='https://covid19.mathdro.id' target="_blank" color='secondary'>covid19.mathdro.id</Button>
        <Button href='https://api.coronatracker.com' target="_blank" color='secondary'>CoronaTrackerAPI</Button>
        <Button href='https://api.apify.com' target="_blank" color='secondary'>Apify API</Button>
        <Button href='https://disease.sh/' target="_blank" color='secondary'>
          disease.sh
        </Button>
      </CardContent>
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>Content</Typography>
        <Button>Made with React, material-ui and chartjs</Button>
      </CardContent>
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>Code and Contributors</Typography>
        <Button size='large' href=' https://github.com/hauchongtang/covid-dash' target="_blank" color='secondary'>
          Github
        </Button>
        <Button size='large' href='https://github.com/imsamuel' target="_blank" color='secondary'>
          imsamuel
        </Button>
      </CardContent>
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>Find me @</Typography>
        <Button size='large' href=' https://hauchongtang.github.io/portfolio-webpage/#/' target="_blank" color='secondary'>
          HC
        </Button>
      </CardContent>
    </>
  )
}

export default About;
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
    backgroundColor: 'rgb(64,224,208, 0.1)',
    borderRadius: '12px',
    borderTop: '12px solid rgb(64,224,208)',
    width: '80%',
    marginLeft: '10% !important',
    textAlign: 'justify'
  },
})

const About = () => {
  const styles = useStyles();
  return (
    <>
      <TopBar />
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>Mentions</Typography>
        <Button href='https://api.covid19api.com'>covid19api</Button>
        <Button href='https://covid19-api.org'>covid19-api</Button>
        <Button href='https://covid19.mathdro.id'>covid19.mathdro.id</Button>
        <Button href='https://api.coronatracker.com'>CoronaTrackerAPI</Button>
        <Button href='https://api.apify.com'>Apify API</Button>
      </CardContent>
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>Content</Typography>
        <Typography variant='button'>Made with React, material-ui and chartjs</Typography>
      </CardContent>
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>Code and Contributors</Typography>
        <Button size='large' href=' https://github.com/thchong-code/covid-dash' color='inherit'>
          Github
        </Button>
        <Button size='large' href='https://github.com/imsamuel' color='inherit'>
          imsamuel
        </Button>
      </CardContent>
      <CardContent elevation={1} className={styles.card}>
        <Typography align='inherit' variant='h5'>Find me !</Typography>
        <Button size='large' href=' https://thchong-code.github.io/portfolio-webpage/#/' color='inherit'>
          HC
        </Button>
      </CardContent>
    </>
  )
}

export default About;
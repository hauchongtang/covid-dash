import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Link, LinearProgress } from '@material-ui/core';
import { countries } from 'country-data';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from '../TopBar/TopBar';
import { fetchTopNews } from '../../api-handler/index';

const useStyles = makeStyles({
  container: {
    textAlign: 'justify',
  },
  card: {
    margin: '2% !important',
    backgroundColor: 'rgb(64,224,208, 0.1)',
    borderRadius: '12px',
    borderTop: '12px solid rgb(64,224,208)',
    width: '80%',
    textAlign: 'justify'
  },
})

const News = () => {
  const [data, setData] = useState([]);

  const styles = useStyles();

  useEffect(() => {
    const fetchAPI = async () => {
      const newsData = await fetchTopNews();
      setData(newsData);
    }
    fetchAPI();
  }, []);

  if (!data) {
    return (
      <LinearProgress />
    )
  }

  const mapNews = data.map((items, index) => {
    return (
      <div>
        <CardContent className={styles.card}>
          <Typography variant='h6' color='textPrimary' gutterBotton>{countries[items.countryCode].name}</Typography>
          <Typography variant='h6' color='primary' gutterBottom>{items.title}</Typography>
          <Typography variant='body2'>{items.content}</Typography>
          <Typography variant='caption'>
            Source:&nbsp;
            <Link href={items.url}>{items.url}</Link>
          </Typography>
          <Typography variant='body2'>Published:&nbsp;{new Date(items.publishedAt).toLocaleString()}</Typography>
        </CardContent>
      </div>
    )
  })

  return (
    <>
      <TopBar />
      <Grid container spacing={0} align='center'>
        <Grid item component={Card}>
          {mapNews}
        </Grid>
      </Grid>
    </>
  )
}

export default News;
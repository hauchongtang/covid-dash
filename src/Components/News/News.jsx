import React, { useState, useEffect } from 'react';
import { Grid, CardContent, Typography, Link, LinearProgress } from '@material-ui/core';
import { countries } from 'country-data';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from '../TopBar/TopBar';
import { fetchTopNews } from '../../api-handler/index';

const useStyles = makeStyles({
  container: {
    textAlign: 'justify',
    boxShadow: 'none !important',
    width: '100% !important',
    marginLeft: '10%'
  },
  card: {
    margin: '2% !important',
    borderColor: 'transparent',
    textAlign: 'justify',
    // width: '80%',
    // marginLeft: '10% !important',
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
      <>
        <CardContent className={styles.card}>
          <Typography variant='h6' color='textPrimary' gutterBotton>{countries[items.countryCode].name}</Typography>
          <Typography variant='h6' color='primary' gutterBottom>{items.title}</Typography>
          <Typography variant='body2'>{items.content}</Typography>
          <Typography variant='caption'>
            Source:&nbsp;
            <Link href={items.url} target="_blank">{items.url}</Link>
          </Typography>
          <Typography variant='body2'>Published:&nbsp;{new Date(items.publishedAt).toLocaleString()}</Typography>
        </CardContent>
      </>
    )
  })

  return (
    <>
      <TopBar />
      <Grid elevation={0} container spacing={0}>
        <Grid item>
          {mapNews}
        </Grid>
      </Grid>
    </>
  )
}

export default News;
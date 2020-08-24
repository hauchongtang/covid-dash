import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Link } from '@material-ui/core';
import { countries } from 'country-data';

import TopBar from '../TopBar/TopBar';
import { fetchTopNews } from '../../api-handler/index';

import styles from './News.module.css';

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const newsData = await fetchTopNews();
      setData(newsData);
    }
    fetchAPI();
  }, []);

  const mapNews = data.map((items, index) => {
    return (
      <div className={styles.container}>
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
      <div className={styles.container}>
        <Grid spacing={3} align='center'>
          <Grid item component={Card}>
            {mapNews}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default News;
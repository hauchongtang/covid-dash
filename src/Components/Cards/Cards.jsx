import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  LinearProgress
} from '@material-ui/core';
import { HorizontalBar } from 'react-chartjs-2';
import { makeStyles } from "@material-ui/core/styles";
import CountUp from 'react-countup';
import cx from 'classnames';

import { fetchTopDaily } from '../../api-handler/index';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    width: '50% !important'
  },
  card: {
    margin: '2% !important',
    borderRadius: '12px',
  },
  root: {
    margin: '2% !important',
    padding: '2%',
    textAlign: 'justify',
    width: '76%',
    marginLeft: '10% !important',
    marginTop: '0% !important',
    marginBottom: '0% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(138,43,226, 0.1)'
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
  tables: {
    maxHeight: '240px',
    width: '100% !important',
  },
});

const Cards = ({ data, date }) => {
  const totalInfected = parseInt(data.TotalConfirmed);
  const totalRecovered = parseInt(data.TotalRecovered);
  const totalDeaths = parseInt(data.TotalDeaths);
  const totalActive = totalInfected - totalDeaths - totalRecovered;
  const lastUpdated = new Date(date).toDateString();

  const styles = useStyles();

  const [topData, setTopData] = useState([]);
  const columns = [
    { id: "country", label: "Country" },
    { id: "daily_cases", label: "Newly Confirmed" },
    { id: "daily_deaths", label: "New Deaths" },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchTopDaily();
      setTopData(fetchedData);
    }
    fetchAPI();
  }, []);

  const topDailyBar = (
    topData ? (
      <HorizontalBar
        data={{
          labels: topData.map(items => items.country),
          datasets: [
            {
              label: 'New Cases',
              backgroundColor: 'rgba(0,255,127, 0.5)',
              data: topData.map(items => items.daily_cases),
            },
            {
              label: 'Deaths',
              backgroundColor: 'rgba(0, 0, 225, 0.5)',
              data: topData.map(items => items.daily_deaths),
            }
          ],
        }}
        options={{
          legend: { display: true },
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true
            }]
          }
        }}
      />
    ) : <LinearProgress />
  )

  if (!totalInfected) {
    return (
      <LinearProgress />
    );
  }
  return (
    <div >
      <Grid container spacing={3} justify='center' borderRadius={16}>
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography gutterBottom>Confirmed</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalInfected} duration={2.5} separator="," />
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
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography gutterBottom>Active</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={totalActive} duration={2.5} separator="," />
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
      <Paper elevation={0} className={styles.root}>
        <Typography variant='h5' color='textSecondary' gutterBottom style={{ textAlign: 'center' }}>Top 10 Daily Figures 📈 (Updated live)</Typography>
        <Grid container spacing={3} justify='center'>
          <Grid item>
            <TableContainer className={styles.tables}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topData.map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.country}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id}>{value}</TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <div className={styles.container}>
            <Grid item>
              {topDailyBar}
            </Grid>
          </div>
        </Grid>
      </Paper>
    </div >
  )
}

export default Cards;
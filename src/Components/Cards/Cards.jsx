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
  LinearProgress,
  Button
} from '@material-ui/core';
import { HorizontalBar } from 'react-chartjs-2';
import { makeStyles } from "@material-ui/core/styles";
import CountUp from 'react-countup';
import cx from 'classnames';

import { fetchWorldTdyYtd } from '../../api-handler/index';

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
    marginBottom: '1% !important',
    borderRadius: '12px',
    backgroundColor: 'rgb(92, 219, 149, 0.1)'
  },
  root1: {
    padding: '1%',
    textAlign: 'justify',
    marginTop: '0% !important',
    // marginBottom: '1% !important',
    // borderRadius: '12px',
    backgroundColor: 'rgb(92, 219, 149, 0.2)'
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
  more: {
    alignItems: 'center'
  }
});

const Cards = ({ data, date }) => {
  const totalInfected = parseInt(data.TotalConfirmed);
  const totalRecovered = parseInt(data.TotalRecovered);
  const totalDeaths = parseInt(data.TotalDeaths);
  const totalActive = totalInfected - totalDeaths - totalRecovered;

  const styles = useStyles();

  const [tdyData, setTdyData] = useState([]);
  const [ytdData, setYtdData] = useState([]);

  const columns = [
    { id: "country", label: "Country" },
    { id: "todayCases", label: "Newly Confirmed" },
    { id: "todayDeaths", label: "New Deaths" },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedAPI = await fetchWorldTdyYtd();
      const { today } = fetchedAPI;
      const { yesterday } = fetchedAPI;
      setTdyData(today);
      setYtdData(yesterday);
    }
    fetchAPI();
  }, []);

  const topDailyBar = (
    tdyData ? (
      <HorizontalBar
        data={{
          labels: tdyData.map(items => items.country),
          datasets: [
            {
              label: 'New Cases',
              backgroundColor: 'rgba(0,255,127, 0.5)',
              data: tdyData.map(items => items.todayCases),
            },
            {
              label: 'Deaths',
              backgroundColor: 'rgba(0, 0, 225, 0.5)',
              data: tdyData.map(items => items.todayDeaths),
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

  const topYtdBar = (
    ytdData ? (
      <HorizontalBar
        data={{
          labels: ytdData.map(items => items.country),
          datasets: [
            {
              label: 'New Cases',
              backgroundColor: 'rgb(128,0,128, 0.5)',
              data: ytdData.map(items => items.todayCases),
            },
            {
              label: 'Deaths',
              backgroundColor: 'yellow',
              data: ytdData.map(items => items.todayDeaths),
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
    return null;
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
        <Typography variant='h5' color='textSecondary' gutterBottom style={{ textAlign: 'center' }}>Top 10 Today <span role="img" aria-label="grinning face" id="rise trend">📈</span></Typography>
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
                  {tdyData.map((row) => {
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
                            <TableCell key={column.id}>{value.toLocaleString()}</TableCell>
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
      <Paper elevation={0} className={styles.root}>
        <Typography variant='h5' color='textSecondary' gutterBottom style={{ textAlign: 'center' }}>Top 10 Yesterday <span role="img" aria-label="grinning face" id="rise trend">📈</span></Typography>
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
                  {ytdData.map((row) => {
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
                            <TableCell key={column.id}>{value.toLocaleString()}</TableCell>
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
              {topYtdBar}
            </Grid>
          </div>
          <Grid item>
            <Typography variant='button' ><Button color='secondary' className={styles.more} href='#/toptensummary'>Comparison Tables Click Here</Button></Typography>
          </Grid>
        </Grid>
      </Paper>
    </div >
  )
}

export default Cards;
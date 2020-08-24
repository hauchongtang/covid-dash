import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  Card,
  CardContent,
  Paper
} from '@material-ui/core';

import TopBar from '../TopBar/TopBar';
import { fetchSummaryData } from '../../api-handler/index';

import styles from './Tables.module.css';

const Tables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const summaryData = await fetchSummaryData();
      setData(summaryData);
      console.log(summaryData)
    }
    fetchAPI();
  }, [])

  const summaryTableBody = data.map((item, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{item.Country}</TableCell>
        <TableCell>{item.NewConfirmed}</TableCell>
        <TableCell>{item.NewDeaths}</TableCell>
        <TableCell>{item.NewRecovered}</TableCell>
        <TableCell>{item.TotalConfirmed}</TableCell>
        <TableCell>{item.TotalDeaths}</TableCell>
        <TableCell>{item.TotalRecovered}</TableCell>
      </TableRow>
    )
  })

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <Paper className={styles.container}>
          <Grid spacing={3} align='center'>
            <Grid item component={Card} className={styles.container}>
              <CardContent className={styles.container}>
                <TableContainer className={styles.container}>
                  <Table stickyHeader={true} aria-label="sticky table" className={styles.container}>
                    <TableHead className={styles.head}>
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={1}>{'Country'}</TableCell>
                        <TableCell key={2}>{'Newly Confirmed'}</TableCell>
                        <TableCell key={3}>{'New Deaths'}</TableCell>
                        <TableCell key={4}>{'Newly Recovered'}</TableCell>
                        <TableCell key={5}>{'Confirmed'}</TableCell>
                        <TableCell key={6}>{'Deaths'}</TableCell>
                        <TableCell key={7}>{'Recovered'}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {summaryTableBody}
                    </TableBody>
                    <caption>Courtesy of https://api.covid19api.com</caption>
                  </Table>
                </TableContainer>
              </CardContent>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  )
}

export default Tables;
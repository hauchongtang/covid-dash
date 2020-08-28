import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  Paper,
  LinearProgress,
  Button
} from "@material-ui/core";

import TopBar from "../TopBar/TopBar";
import { fetchWorldTdyYtd } from "../../api-handler/index";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 530,
    backgroundColor: 'rgb(92, 219, 149, 0.1)'
  },
  card: {
    backgroundColor: 'rgb(92, 219, 149, 0.1)'
  },
});

const TopTenYtd = () => {
  const styles = useStyles();
  const [ytdData, setYtdData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedAPI = await fetchWorldTdyYtd();
      const { yesterday } = fetchedAPI;
      setYtdData(yesterday);
    };
    fetchAPI();
  }, []);

  const columns = [
    { id: "country", label: "Country" },
    { id: "cases", label: "Total Cases" },
    { id: "todayCases", label: "New Cases" },
    { id: "deaths", label: "Total Deaths" },
    { id: "recovered", label: "Total Recovered" },
    { id: "todayRecovered", label: "New Recovered" },
    { id: "active", label: "Active" },
    { id: "casesPerOneMillion", label: "Cases per million" },
    { id: "deathsPerOneMillion", label: "Deaths per million" },
    { id: "population", label: "Total Population" },
    { id: "continent", label: "Continent" }
  ];

  if (!ytdData.map(item => item.country)) {
    return (
      <LinearProgress />
    )
  }

  return (
    <>
      <TopBar />
      <Paper className={styles.root}>
        <Grid spacing={3} align="center">
          <Grid item>
            <Button color='secondary' className={styles.more} href='#/toptensummary'>Today</Button>
            <Button color='secondary' className={styles.more} href='#/toptensummaryytd'>Yesterday</Button>
            <Button color='secondary' className={styles.more} href='#/'>Home</Button>
          </Grid>
          <Grid item component={Card} className={styles.card}>
            <CardContent>
              <TableContainer className={styles.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead className={styles.head}>
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
                  <caption>Courtesy of https://disease.sh/</caption>
                </Table>
              </TableContainer>
            </CardContent>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TopTenYtd;
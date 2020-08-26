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
} from "@material-ui/core";

import TopBar from "../TopBar/TopBar";
import { fetchSummaryData } from "../../api-handler/index";

const useStyles = makeStyles({
  root: {
    width: '80%',
    paddingLeft: '10%',
  },
  container: {
    maxHeight: 530,
    backgroundColor: 'rgb(175,238,238, 0.1)'
  },
  card: {
    backgroundColor: 'rgb(175,238,238, 0.2)'
  },
});

const Tables = () => {
  const styles = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const summaryData = await fetchSummaryData();
      setData(summaryData);
    };
    fetchAPI();
  }, []);

  const columns = [
    { id: "Country", label: "Country" },
    { id: "NewConfirmed", label: "Newly Confirmed" },
    { id: "NewDeaths", label: "New Deaths" },
    { id: "NewRecovered", label: "Newly Recovered" },
    { id: "TotalConfirmed", label: "Confirmed" },
    { id: "TotalDeaths", label: "Deaths" },
    { id: "TotalRecovered", label: "Recovered" },
  ];

  if (!data.map(item => item.CountryCode)) {
    return (
      <LinearProgress />
    )
  }

  return (
    <>
      <TopBar />
      <Paper className={styles.root}>
        <Grid spacing={3} align="center">
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
                    {data.map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.CountryCode}
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
                  <caption>Courtesy of https://api.covid19api.com</caption>
                </Table>
              </TableContainer>
            </CardContent>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Tables;

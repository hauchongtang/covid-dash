import React, { useState, useEffect, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {
  Grid,
  Card,
  CardContent,
  Paper,
  LinearProgress,
  Button
} from "@material-ui/core";
import MaterialTable from 'material-table';

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
  more: {
    alignItems: 'center'
  }
});

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const TopTenTables = () => {
  const styles = useStyles();
  const [tdyData, setTdyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedAPI = await fetchWorldTdyYtd();
      const { today } = fetchedAPI;
      setTdyData(today);
    };
    fetchAPI();
  }, []);

  const columns = [
    { field: "country", title: "Country" },
    { field: "cases", title: "Total Cases", customSort: (a, b) => parseInt(a.cases.replace(/,/g, "")) - parseInt(b.cases.replace(/,/g, "")) },
    { field: "todayCases", title: "New Cases", customSort: (a, b) => parseInt(a.todayCases.replace(/,/g, "")) - parseInt(b.todayCases.replace(/,/g, "")) },
    { field: "deaths", title: "Total Deaths", customSort: (a, b) => parseInt(a.deaths.replace(/,/g, "")) - parseInt(b.deaths.replace(/,/g, "")) },
    { field: "recovered", title: "Total Recovered", customSort: (a, b) => parseInt(a.recovered.replace(/,/g, "")) - parseInt(b.recovered.replace(/,/g, "")) },
    { field: "todayRecovered", title: "New Recovered", customSort: (a, b) => parseInt(a.todayRecovered.replace(/,/g, "")) - parseInt(b.todayRecovered.replace(/,/g, "")) },
    { field: "active", title: "Active", customSort: (a, b) => parseInt(a.active.replace(/,/g, "")) - parseInt(b.active.replace(/,/g, "")) },
    { field: "casesPerOneMillion", title: "Cases per million", customSort: (a, b) => parseInt(a.casesPerOneMillion.replace(/,/g, "")) - parseInt(b.casesPerOneMillion.replace(/,/g, "")) },
    { field: "deathsPerOneMillion", title: "Deaths per million", customSort: (a, b) => parseInt(a.deathsPerOneMillion.replace(/,/g, "")) - parseInt(b.deathsPerOneMillion.replace(/,/g, "")) },
    { field: "population", title: "Total Population", customSort: (a, b) => parseInt(a.population.replace(/,/g, "")) - parseInt(b.population.replace(/,/g, "")) },
    { field: "continent", title: "Continent" }
  ];

  if (!tdyData.map(item => item.country)) {
    return (
      <LinearProgress />
    )
  }

  var dataSet = tdyData;
  const mapData = (dataSet) => {
    dataSet.map(item => {
      item.country = item.country.toLocaleString()
      item.cases = item.cases.toLocaleString()
      item.todayCases = item.todayCases.toLocaleString()
      item.deaths = item.deaths.toLocaleString()
      item.recovered = item.recovered.toLocaleString()
      item.todayRecovered = item.todayRecovered.toLocaleString()
      item.active = item.active.toLocaleString()
      item.casesPerOneMillion = item.casesPerOneMillion.toLocaleString()
      item.deathsPerOneMillion = item.deathsPerOneMillion.toLocaleString()
      item.population = item.population.toLocaleString()
      item.continent = item.continent.toLocaleString()
      return item;
    })
  }
  mapData(dataSet);

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
              <MaterialTable
                icons={tableIcons}
                columns={columns}
                title={window.location.hash === "#/toptensummary" ? "Today's Summary" : "Yesterday's Summary"}
                data={dataSet}
                options={{
                  sorting: true,
                }}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TopTenTables;
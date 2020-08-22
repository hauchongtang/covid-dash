import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './App.module.css';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
// import Country from './Components/Country/Country';

import { fetchData } from './api-handler/index';

class App extends React.Component {

  state = {
    data: {},
    dataDynamic: {},
    date: '',
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData.Global });
    this.setState({ date: fetchedData.Date });
  }

  // handleCountryChange = async (country) => {
  //   if (!country) {
  //     await fetchDailyData();
  //   } else {
  //     await fetchDailyData(country);
  //   }
  //   console.log(country)
  //   this.setState({ country: country });
  // }

  render() {

    const { data } = this.state;
    const { date } = this.state;
    const { country } = this.state;

    return (
      <>
        <div className={styles.container}>
          <Cards data={data} date={date} />
          {/* <Country handleCountryChange={this.handleCountryChange} /> */}
          <Charts country={country} />
        </div>
        <div className={styles.h1}>
          <Typography variant='h6' align='center'>Made with React and chart.js</Typography>
          <Typography variant='h6' align='center'><a href='https://github.com/thchong-code/covid-dash'>GitHub</a>&nbsp;&nbsp;<a href='https://thchong-code.github.io/portfolio-webpage/'>Website</a></Typography>
        </div>
      </>
    )
  }
};

export default App;

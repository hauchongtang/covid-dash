import React from 'react';

import styles from './App.module.css';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import TopBar from './Components/TopBar/TopBar';

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

  render() {

    const { data } = this.state;
    const { date } = this.state;
    const { country } = this.state;

    return (
      <>
        <TopBar />
        <div className={styles.container}>
          <Cards data={data} date={date} />
        </div>
        <div className={styles.container}>
          <Charts country={country} />
        </div>
      </>
    )
  }
};

export default App;

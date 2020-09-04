import React from 'react';
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import TopBar from './Components/TopBar/TopBar';

import { fetchData } from './api-handler/index';

import './App.css';

class App extends React.Component {

  state = {
    data: {},
    dataDynamic: {},
    date: '',
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({ data: fetchedData });
  }

  render() {

    const { data } = this.state;

    return (
      <>
        <div className='container'>
          <TopBar />
          <Cards data={data} />
          <Charts data={data} />
        </div>
      </>
    )
  }
};

export default App;

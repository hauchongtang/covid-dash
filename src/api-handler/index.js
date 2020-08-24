import axios from 'axios';

export const fetchData = async () => {
  try {
    const url = 'https://api.covid19api.com/summary';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async (country) => {
  const url = 'https://api.covid19api.com/total/country';
  var variableUrl = url;
  if (country) {
    variableUrl = `${url}/${country}`;
  }
  if (!country) {
    variableUrl = `${url}/singapore`;
  }
  try {
    const response = await axios.get(variableUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchWorldDailyData = async () => {
  try {
    const url = 'https://covid19.mathdro.id/api/daily';
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const countries = async () => {
  try {
    const url = 'https://covid19.mathdro.id/api/countries';
    const response = await axios.get(url);
    return response.data.countries;
  } catch (error) {
    console.log(error);
  }
}

export const fetchCurrentData = async () => {
  try {
    const url = 'https://covid19.mathdro.id/api/countries/Singapore';
    const response = await axios.get(url);
    const infected = response.data.confirmed.value;
    const recovered = response.data.recovered.value;
    const deaths = response.data.deaths.value;
    const active = infected - deaths - recovered;
    const modifiedData = { infected, recovered, active, deaths };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
}

export const fetchSummaryData = async () => {
  try {
    const url = 'https://api.covid19api.com/summary';
    const response = await axios.get(url);
    const dataSet = response.data;
    const countriesData = dataSet.Countries;
    return countriesData;
  } catch (error) {
    console.log(error);
  }
}

export const fetchTopNews = async () => {
  try {
    const url = 'https://api.coronatracker.com/news/trending';
    const response = await axios.get(url);
    const dataSet = response.data.items;
    return dataSet;
  } catch (error) {
    console.log(error);
  }
}
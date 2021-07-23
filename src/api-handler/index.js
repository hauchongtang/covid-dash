import axios from 'axios';

export const fetchData = async () => {
  try {
    const url = 'https://api.coronatracker.com/v3/stats/worldometer/global';
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
    const url = 'https://corona.lmao.ninja/v2/historical/all';
    const response = await axios.get(url);
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

export const fetchTopDaily = async () => {
  try {
    const url = 'https://api.coronatracker.com/v3/analytics/dailyNewStats?limit=10';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchSGData = async () => {
  try {
    const url = 'https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true';
    const response = await axios.get(url);
    const hospitalizedData = {
      community: response.data.inCommunityFacilites,
      stable: response.data.stableHospitalized,
      critical: response.data.criticalHospitalized
    }
    return hospitalizedData;
  } catch (error) {
    console.log(error);
  }
}

export const fetchWorldTdyYtd = async () => {
  try {
    const urlToday = 'https://disease.sh/v3/covid-19/countries?sort=todayCases';
    const urlTodayUnsorted = 'https://disease.sh/v3/covid-19/countries';
    const urlYtd = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases';
    const urlYtdUnsorted = 'https://disease.sh/v3/covid-19/countries?yesterday=true';
    const todayResponse = await axios.get(urlToday);
    const ytdResponse = await axios.get(urlYtd);
    const todayRes = await axios.get(urlTodayUnsorted);
    const ytdRes = await axios.get(urlYtdUnsorted);
    const modifiedData = {
      today: todayResponse.data.slice(0, 10),
      todayAll: todayRes.data,
      yesterday: ytdResponse.data.slice(0, 10),
      yesterdayAll: ytdRes.data
    }
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
}

export const fetchLocationData = async () => {
  try {
    const url = 'https://corona.lmao.ninja/v2/countries?sort=cases';
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
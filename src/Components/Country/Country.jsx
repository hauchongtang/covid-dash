import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { countries } from '../../api-handler/index';

import styles from './Country.module.css';

const Country = ({ handleCountryChange }) => {
  const [countriesData, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const fetchAPI = await countries();
      const countryData = fetchAPI.map(item => item.name);
      setCountries(countryData);
    }
    fetchCountries();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        {countriesData.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default Country;
import React, { useMemo } from 'react';
import { Select } from './styled';
import countryList from 'react-select-country-list';

export const CountrySelector = (props) => {
  const countries = useMemo(() => countryList().getData(), [])
  return <Select options={countries} {...props} />
};

export default CountrySelector;
import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'
import { Select } from './styled'

export function CountrySelector(props) {
  const countries = useMemo(() => countryList().getData(), [])
  return <Select options={countries} {...props} />
}

export default CountrySelector
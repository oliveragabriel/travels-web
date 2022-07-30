import React from 'react';
import { Select } from './styled';

export const CurrencySelector = (props) => {
 
  const currencies = [
    {
      label: "BRL - R$",
      value: "BRL"
    },
    {
      label: "USD - $",
      value: "USD"
    },
    {
      label: "EUR - €",
      value: "EUR"
    },
    {
      label: "MXN - $",
      value: "MXN"
    },
    {
      label: "GBP - £",
      value: "GBP"
    },
    {
      label: "ARS - $",
      value: "ARS"
    },
    {
      label: "CNY - ¥",
      value: "CNY"
    },
    {
      label: "CLP - $",
      value: "CLP"
    },
    {
      label: "PEN - S/",
      value: "PEN"
    },
  ]

  return <Select 
    {...props} 
    options={currencies}
    defaultValue={
      {
        label: "BRL - R$",
        value: "BRL"
      }
    } 
  />
};

export default CurrencySelector;
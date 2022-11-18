import React from 'react'
import { StyledFormItem } from './styled'

export function FormItem({ label, name, content, tooltip }) {
  return (<StyledFormItem 
    label={label}
    name={name}
    tooltip={tooltip}
  >
    {content}
  </StyledFormItem>)
}
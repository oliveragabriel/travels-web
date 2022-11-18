import React from 'react'
import { StyledButton } from './styled'

export function ButtonText({ text, icon, func }) {
  return (
    <StyledButton
      title={text} 
      icon={icon} 
      type='text' 
      onClick={func} 
    >
      {text}
    </StyledButton>
  )
}
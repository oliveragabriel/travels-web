import React from 'react'
import { Tooltip } from 'antd'
import { StyledButton } from './styled'

export function ButtonCircle({ text, icon, func }) {
  return (
    <Tooltip title={text}>
      <StyledButton 
        icon={icon} 
        size='large' 
        type="primary" 
        shape='circle' 
        onClick={func} 
      />
    </Tooltip>
  )
}
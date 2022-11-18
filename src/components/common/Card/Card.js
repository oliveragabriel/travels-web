import React from 'react'
import { StyledCard } from './styled'

export function Card({ title, icon, content }) {
  return (
    <StyledCard
      title={title} 
      extra={icon}
    >
      {content}
    </StyledCard>
  )
}
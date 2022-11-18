import React from 'react'
import { StyledButton } from './styled'

export function Button({ type, htmlType, icon, title, label, handleSubmit = () => {}, loading, style }) {
  return <StyledButton
    type={type}
    icon={icon}
    title={title}
    htmlType={htmlType}
    onClick={handleSubmit}
    loading={loading}
    style={style}
  >
    {label}
  </StyledButton>

}
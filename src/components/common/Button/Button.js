import React from 'react';
import { StyledButton } from './styled';

export const Button = ({ icon, title, label, handleSubmit = () => {}, loading, style }) => {
  return <StyledButton
    type='primary'
    icon={icon}
    title={title}
    htmlType='submit'
    onClick={handleSubmit}
    loading={loading}
    style={style}
  >
    {label}
  </StyledButton>

};
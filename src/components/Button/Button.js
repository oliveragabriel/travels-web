import React from 'react';
import { StyledButton } from './styled';

export const Button = ({ title, label, handleSubmit = () => {}, loading }) => {
  return <StyledButton
    type='primary'
    title={title}
    htmlType='submit'
    onClick={handleSubmit}
    loading={loading}
  >
    {label}
  </StyledButton>

};
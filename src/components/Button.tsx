import React from 'react';
import {default as styledComponents} from 'styled-components';
import {styled} from '@mui/material/styles';
import {CircularProgress} from '@mui/material';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean,
  loading?: boolean,
  size?: 'small'|'medium',
}

const StyledButton = styledComponents.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({size = 'undefined'}) => size === 'small' ? '180px' : size === 'medium' ? '380px' : '156px'};
  height: 50px;
  background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#0086A8'};
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({disabled = false}) => disabled ? '#828282' : '#FFFFFF'};
  border-radius: 8px;
  
  &:hover {
    background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#007693'};
    cursor: ${({disabled = false}) => disabled ? 'not-allowed' : 'pointer'};
  }
  
  &:active {
    background-color: ${({disabled = false}) => disabled ? '#E3E3E3' : '#00657E'};
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  color: #FFFFFF;
  width: 30px !important;
  height: 30px !important;
`;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton disabled={props.disabled} onClick={props.onClick} size={props.size}>
      {props.loading && !props.disabled ? <StyledCircularProgress /> : props.children}
    </StyledButton>
  )
}

export default Button;

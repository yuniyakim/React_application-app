import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {default as SelectMUI, SelectProps} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import {styled} from '@mui/material/styles';
import {Field, WrappedFieldProps} from 'redux-form';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const StyledFormControl = styled(FormControl)`
  //width: 100%;
  margin-top: 8.625px;
  //margin-bottom: 20px;

  .MuiOutlinedInput-root {
    height: 50px;
  }
`;

const StyledSelect = styled(SelectMUI)<{error?: boolean, size?: 'small'|'medium'}>`
  width: ${({size = 'undefined'}) => size === 'small' ? '180px' : size === 'medium' ? '380px' : '300px'};
  text-align: start;
  background-color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({error = false}) => error ? '#EB5E55' : '#353238'}; ;
  border-radius: 8px;
  
  .Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #0086A8;
    }
  }
  
  .MuiOutlinedInput-notchedOutline {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    height: 52px;
    border: 2px solid ${({error = false}) => error ? '#EB5E55 !important' : '#E3E3E3'};
  }

  // Icon
  .MuiSvgIcon-root {
    fill: #353238;
    width: 25px;
  }

  // Dropdown list
  .MuiPaper-root {
    border: 1px solid #E3E3E3;

    .MuiList-root {
      padding-top: 0;
      padding-bottom: 0;
      border: 1px solid #E3E3E3;
      border-radius: 8px;
    }
  }
`;

const StyledMenuItem = styled(MenuItem)`
  max-height: 22px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #353238;
  border: 1px solid #E3E3E3;
`;

const StyledInputLabel= styled(InputLabel)<{error?: boolean}>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({error = false}) => error ? '#EB5E55' : '#353238'};
  
  &.Mui-focused {
    color: ${({error = false}) => error ? '#EB5E55' : '#0086A8 !important'};
  }
  
  &.MuiInputLabel-shrink {
    color: ${({error = false}) => error ? '#EB5E55' : '#828282'};
  }
`

const StyledFormHelperText= styled(FormHelperText)`
  margin-top: 8px;
  margin-left: 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #EB5E55 !important;
`

const SelectComponent: React.FC<WrappedFieldProps & SelectProps> = ({
                                                                      size,
                                                                      input,
                                                                      label,
                                                                      meta: {touched, error},
                                                                      children,
                                                                      ...custom
                                                                    }) => (

  <StyledFormControl>
    <StyledInputLabel error={!!(touched && error)}>{label}</StyledInputLabel>
      <StyledSelect
        size={size}
        error={!!(touched && error)}
        {...input}
        {...custom}
        onChange={(event) => input.onChange(event.target.value)}
        variant="outlined"
        children={children}
        label={label}
        IconComponent={KeyboardArrowDownRoundedIcon}
        MenuProps={{ disablePortal: true }}
      />
    <StyledFormHelperText error={!!(touched && error)}>{!!(touched && error) ? 'Обязательное поле' : ' '}</StyledFormHelperText>
  </StyledFormControl>
);

const Select = (props: {fieldName: string, label: string, selectValues: string[], size?: 'small'|'medium'}) => {
  return (
    <Field name={props.fieldName} component={SelectComponent} label={props.label} size={props.size}>
      {props.selectValues.map((value) => (
        <StyledMenuItem key={value} value={value}>
          {value}
        </StyledMenuItem>
      ))}
    </Field>
  )
}

export default Select;
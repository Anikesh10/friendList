import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Validator from '../../utils/validation';

import {
  Container,
  Label,
  StyledInputField,
  HelperText,
} from './InputField.styled';

const InputField = ({
  type,
  label,
  id,
  error,
  value,
  placeholder,
  onChange,
  onEnterPress,
}) => {
  // States
  const [inputValue, setInputValue] = useState(value);
  const [errorValue, setError] = useState(error);

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.which === 10 || e.which === 13) {
      onEnterPress && onEnterPress(inputValue);
    }
  };

  // Get error
  const getErrors = (value) => {
    if (Validator.checkIfspecialChar(value)) {
      return 'Please do not enter special characters.';
    }
    return;
  };

  // Handle Change
  const handleChange = (e) => {
    const value = e.target.value;
    // Check for errors
    const errors = getErrors(value);
    setError(errors);

    setInputValue(value);

    // Callback prop on input change
    if (onChange) onChange(e, value);
  };

  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInputField
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        id={id}
      />
      {errorValue ? <HelperText>{errorValue}</HelperText> : null}
    </Container>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onEnterPress: PropTypes.func,
};

InputField.defaultProps = {
  id: '',
  type: 'text',
  value: '',
};

export default InputField;

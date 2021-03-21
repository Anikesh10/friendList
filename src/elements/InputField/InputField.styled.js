import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 10px 10px 35px;
  width: 100%;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  cursor: pointer;
`;

const StyledInputField = styled.input`
  display: block;
  width: 100%;
  padding: 10px 20px;
  border-radius: 11px;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.LIGHT_GREY};
  color: ${(props) => props.theme.colors.GREY};
  border: none;
  outline: none;
  font: 500 14px Inter, sans-serif;
  line-height: 1.36;
`;

const HelperText = styled.p`
  width: 100%;
  margin: 7px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.colors.RED};
  position: absolute;
  bottom: 5px;
  left: 5px;
`;

export { Container, Label, StyledInputField, HelperText };

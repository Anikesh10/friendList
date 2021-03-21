import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  background-color: #ccc;
  padding: 20px 10px;
`;

export const WidgetWrapper = styled.div`
  width: 50%;
  max-width: 400px;
  margin: 100px auto 0;
  border: 1px solid ${(props) => props.theme.colors.GREY};
`;

export const NotFoundText = styled.span`
  text-align: center;
  display: inline-block;
  padding: 20px 10px;
`;

import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  background-color: #ccc;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
`;

export const ActionPanel = styled.div`
  width: 100%;
  background-color: #ccc;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WidgetWrapper = styled.div`
  width: 50%;
  max-width: 400px;
  margin: 100px auto 80px;
  border: 1px solid ${(props) => props.theme.colors.GREY};
`;

export const NotFoundText = styled.span`
  text-align: center;
  display: inline-block;
  padding: 20px 10px;
`;

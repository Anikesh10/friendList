import styled from 'styled-components';

export const List = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.colors.GREY};
`;

export const Icon = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.GREY};
    outline: none;
  }
`;

export const InfoWrapper = styled.div``;

export const Action = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Helper = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.GREY};
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  display: block;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`;

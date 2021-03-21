import styled from 'styled-components';

export const Footer = styled.div`
  position: relative;
  width: 100%;
  background-color: #ccc;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const PageDetails = styled.span`
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

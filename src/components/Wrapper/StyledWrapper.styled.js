import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: ${(props) => props.theme.wrapper};
  width: 90%;
  margin: 0 auto;
  height: 100vh;
`;

export default StyledWrapper;

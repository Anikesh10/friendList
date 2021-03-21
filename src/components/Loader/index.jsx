import React from 'react';
import Loader from 'react-loader-spinner';

import theme from '../../theme';
import LoadingArea from './Loader.styled';

const OvalLoader = () => {
  return (
    <LoadingArea>
      <Loader type="Oval" color={theme.colors.GREY} height={40} width={40} />
    </LoadingArea>
  );
};

export default OvalLoader;

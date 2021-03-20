import React from 'react';
import Loader from 'react-loader-spinner';

import theme from '../../theme';
import LoadingArea from './OvalLoader.styled';

const OvalLoader = () => {
  return (
    <LoadingArea>
      <Loader type="Oval" color={theme.colors.CYAN} height={20} width={20} />
    </LoadingArea>
  );
};

export default OvalLoader;

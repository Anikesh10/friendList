import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Button, PageDetails } from './Pagination.styled';

const Pagination = ({
  onPreviousPage,
  onNextPage,
  totalCount,
  offset,
  rowsPerPage,
}) => {
  // Pagination will be shown only for a list more than
  if (totalCount <= rowsPerPage) return null;
  const totalPages = Math.ceil(totalCount / rowsPerPage);
  const showPrev = offset > 1;
  const showNext = offset < totalPages;

  return (
    <Footer>
      {showPrev ? <Button onClick={onPreviousPage}>Prev</Button> : null}
      <PageDetails>
        Page {offset} /{totalPages}
      </PageDetails>
      {showNext ? <Button onClick={onNextPage}>Next</Button> : null}
    </Footer>
  );
};

// Proptypes
Pagination.proptype = {
  totalCount: PropTypes.number,
  offset: PropTypes.number,
};

// Default Props
Pagination.defaultProps = {
  totalCount: 0,
  offset: 1,
};

export default Pagination;

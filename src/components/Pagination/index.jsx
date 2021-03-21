import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Button, PageDetails } from './Pagination.styled';

const Pagination = ({
  onPreviousPage,
  onNextPage,
  totalCount,
  currentPage,
  rowsPerPage,
}) => {
  // Pagination will be shown only for a list more than
  if (totalCount <= rowsPerPage) return null;
  const totalPages = Math.ceil(totalCount / rowsPerPage);
  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPages;

  return (
    <Footer>
      <div>
        {showPrev ? <Button onClick={onPreviousPage}>Prev</Button> : null}
      </div>
      <PageDetails>
        Page {currentPage} /{totalPages}
      </PageDetails>
      <div>{showNext ? <Button onClick={onNextPage}>Next</Button> : null}</div>
    </Footer>
  );
};

// Proptypes
Pagination.proptype = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
};

// Default Props
Pagination.defaultProps = {
  totalCount: 0,
  currentPage: 1,
};

export default Pagination;

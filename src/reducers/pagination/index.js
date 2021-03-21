const INITIAL_STATE = {
  offset: 1,
  rowsPerPage: 4,
};

const pagination = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_PAGE': {
      return {
        ...state,
        offset: state.offset + 1,
      };
    }

    case 'PREV_PAGE':
      return {
        ...state,
        offset: state.offset - 1,
      };

    case 'SET_PAGE':
      return {
        ...state,
        offset: action.page,
      };

    default:
      return state;
  }
};

export default pagination;

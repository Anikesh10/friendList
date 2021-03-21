export const nextPage = () => ({
  type: 'NEXT_PAGE',
});

export const prevPage = () => ({
  type: 'PREV_PAGE',
});

export const setPage = (page) => ({
  type: 'SET_PAGE',
  page,
});

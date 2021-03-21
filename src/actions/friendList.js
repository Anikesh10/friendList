let newFriendId = 0;

export const addFriend = (name) => ({
  type: 'ADD_FRIEND',
  id: newFriendId++,
  name,
});

export const getFriends = () => ({
  type: 'GET_FRIENDS',
});

export const toggleFavourite = (id) => ({
  type: 'TOGGLE_FAVOURITE',
  id,
});

export const deleteFriend = (id) => ({
  type: 'DELETE_FRIEND',
  id,
});

export const nextPage = () => ({
  type: 'NEXT_PAGE',
});

export const prevPage = () => ({
  type: 'PREV_PAGE',
});

export const sortFavourites = (list) => ({
  type: 'SORT_FAVOURITES',
  list,
});

export const sortAlphabetical = (list) => ({
  type: 'SORT_ALPHABETICAL',
  list,
});

export const searchName = (term) => ({
  type: 'SEARCH_NAME',
  term,
});

export const closeSearch = () => ({
  type: 'CLOSE_SEARCH',
});

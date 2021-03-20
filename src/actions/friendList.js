let newFriendId = 0;

export const addFriend = (name) => ({
  type: 'ADD_FRIEND',
  id: newFriendId++,
  name,
});

export const sortFavourites = (list) => ({
  type: 'SORT_FAVOURITES',
  list,
});

export const toggleFavourite = (id) => ({
  type: 'TOGGLE_FAVOURITE',
  id,
});

export const deleteFriend = (id) => ({
  type: 'DELETE_FRIEND',
  id,
});

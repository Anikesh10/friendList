let nextTodoId = 0;

export const addFriend = (name) => ({
  type: 'ADD_FRIEND',
  id: nextTodoId++,
  name,
});

export const sortFavourites = (list) => ({
  type: 'SORT_FAVOURITES',
  list,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

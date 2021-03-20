import SortUtils from '../../utils/sort-utils';
import MockFriendsList from './mock-friends';

const friendList = (state = [...MockFriendsList], action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          favourite: false,
        },
      ];

    case 'TOGGLE_FAVOURITE':
      return state.map((eachFriend) =>
        eachFriend.id === action.id
          ? { ...eachFriend, completed: !eachFriend.completed }
          : eachFriend
      );
    case 'DELETE_FRIEND':
      return state.filter((eachFriend) => eachFriend.id !== action.id);

    case 'SORT_FAVOURITES':
      return SortUtils.sortFavorites(action.list);

    default:
      return state;
  }
};

export default friendList;

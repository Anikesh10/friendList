import SortUtils from '../../utils/sort-utils';
import MockFriendsList from './mock-friends';

const friendList = (state = [], action) => {
  switch (action.type) {
    case 'GET_FRIENDS': {
      return [...MockFriendsList];
    }

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
          ? { ...eachFriend, favourite: !eachFriend.favourite }
          : eachFriend
      );
    case 'DELETE_FRIEND':
      return state.filter((eachFriend) => eachFriend.id !== action.id);

    case 'SORT_FAVOURITES':
      return SortUtils.sortArray(action.list, 'favourite');

    case 'SORT_ALPHABETICAL':
      return SortUtils.sortArray(action.list, 'name');

    default:
      return state;
  }
};

export default friendList;

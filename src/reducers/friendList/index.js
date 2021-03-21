import MockFriendsList from './mock-friends';
import ArrayUtils from '../../utils/sort-utils';

const INITIAL_STATE = {
  currentPage: 1,
  rowsPerPage: 4,
  friendList: [],
  showingList: [],
  sortBy: {
    label: 'Name',
    value: 'name',
  },
};

const friendList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_FRIENDS': {
      return {
        ...state,
        friendList: ArrayUtils.sortArray([...MockFriendsList], 'name', 'asc'),
      };
    }

    case 'ADD_FRIEND':
      return {
        ...state,
        friendList: [
          ...state.friendList,
          {
            id: action.id,
            name: action.name,
            favourite: false,
          },
        ],
      };

    case 'TOGGLE_FAVOURITE':
      return {
        ...state,
        friendList: state.friendList.map((eachFriend) =>
          eachFriend.id === action.id
            ? { ...eachFriend, favourite: !eachFriend.favourite }
            : eachFriend
        ),
      };

    case 'DELETE_FRIEND':
      return {
        ...state,
        friendList: state.friendList.filter(
          (eachFriend) => eachFriend.id !== action.id
        ),
      };

    case 'NEXT_PAGE': {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }

    case 'PREV_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case 'SORT_FAVOURITES':
      return {
        ...state,
        friendList: ArrayUtils.sortArray(action.list, 'favourite'),
      };

    case 'SORT_ALPHABETICAL':
      return {
        ...state,
        friendList: ArrayUtils.sortArray(action.list, 'name', 'asc'),
      };

    case 'SEARCH_NAME':
      return {
        ...state,
        searchList: ArrayUtils.searchArray(action.list, 'name', action.term),
      };

    case 'CLEAR_SEARCH':
      return {
        ...state,
        searchList: [],
      };

    default:
      return state;
  }
};

export default friendList;

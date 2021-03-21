import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListItem from '../../components/ListItem';
import Wrapper from '../../components/Wrapper';
import Pagination from '../../components/Pagination';

import InputField from '../../elements/InputField';
import Dropdown from '../../elements/Dropdown';
import SearchField from '../../elements/SearchField';

// Actions
import {
  addFriend,
  deleteFriend,
  toggleFavourite,
  getFriends,
  nextPage,
  prevPage,
  sortAlphabetical,
  sortFavourites,
  searchName,
  closeSearch,
} from '../../actions/friendList';

// Styled
import {
  Header,
  WidgetWrapper,
  NotFoundText,
  ActionPanel,
} from './FriendList.styled';

// Create Friend List
const createFriendList = (
  friendsData = [],
  handleDelete,
  onFavouriteToggle,
  currentPage,
  rowsPerPage,
  isSearching
) => {
  if (!friendsData.length)
    return (
      <NotFoundText>
        {isSearching ? 'No results found.' : 'No friends found :('}
      </NotFoundText>
    );

  // Pagination logic
  const firstIndex = (currentPage - 1) * rowsPerPage;
  const lastIndex = currentPage * rowsPerPage;
  const paginatedList = friendsData.slice(firstIndex, lastIndex);

  return paginatedList.map(({ name, id, favourite }) => (
    <ListItem
      name={name}
      key={id}
      id={id}
      isFavourite={favourite}
      onFavouriteToggle={onFavouriteToggle}
      onDelete={handleDelete}
    />
  ));
};

const FriendList = () => {
  const {
    friendList,
    currentPage,
    rowsPerPage,
    isSearching,
    searchList,
  } = useSelector((state) => state.friendList);

  const dispatch = useDispatch();

  // Get Friends on page load
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  // Handle Sorting
  const handleSort = (selectedOption) => {
    if (selectedOption.value === 'name') {
      dispatch(sortAlphabetical(friendList));
    } else if (selectedOption.value === 'fav') {
      dispatch(sortFavourites(friendList));
    }
  };

  const addNewFriend = (value) => {
    if (value.trim()) {
      dispatch(addFriend(value));
    }
  };

  const handleDeleteFriend = (id) => {
    dispatch(deleteFriend(id));
  };

  const handleFavouriteToggle = (id) => {
    dispatch(toggleFavourite(id));
  };

  const handleSearch = (e, value) => {
    if (value) {
      dispatch(searchName(value));
    } else {
      dispatch(closeSearch());
    }
  };

  // Show search list is results are found
  const showingList = isSearching ? searchList : friendList;

  return (
    <Wrapper>
      <WidgetWrapper>
        <Header>Friend List</Header>
        <InputField
          type="text"
          onEnterPress={addNewFriend}
          placeholder="Add new friend name and press 'ENTER'."
          id="Add friend"
        />
        {friendList.length ? (
          <ActionPanel>
            <SearchField
              type="text"
              onEnterPress={(value) => {
                dispatch(searchName(value));
              }}
              onChange={handleSearch}
              label="Search"
              placeholder="Search by name..."
              id="search"
              backgroundColor="#fff"
            />
            {!isSearching ? (
              <Dropdown
                options={[
                  {
                    label: 'Name',
                    value: 'name',
                  },
                  {
                    label: 'Favourite',
                    value: 'fav',
                  },
                ]}
                onSelect={handleSort}
              />
            ) : null}
          </ActionPanel>
        ) : null}
        {createFriendList(
          showingList,
          handleDeleteFriend,
          handleFavouriteToggle,
          currentPage,
          rowsPerPage,
          isSearching
        )}

        <Pagination
          totalCount={showingList.length}
          onNextPage={() => dispatch(nextPage())}
          onPreviousPage={() => dispatch(prevPage())}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
        />
      </WidgetWrapper>
    </Wrapper>
  );
};

export default FriendList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputField from '../../elements/InputField';
import ListItem from '../../components/ListItem';
import Wrapper from '../../components/Wrapper';
import Pagination from '../../components/Pagination';
import Dropdown from '../../elements/Dropdown';

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
  rowsPerPage
) => {
  if (!friendsData.length)
    return <NotFoundText>No friends found :(</NotFoundText>;

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
  const { friendList, currentPage, rowsPerPage } = useSelector(
    (state) => state.friendList
  );

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
            <InputField
              type="text"
              onEnterPress={() => {}}
              label="Search"
              placeholder="Search by name..."
              id="search"
              backgroundColor="#fff"
            />
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
          </ActionPanel>
        ) : null}
        {createFriendList(
          friendList,
          handleDeleteFriend,
          handleFavouriteToggle,
          currentPage,
          rowsPerPage
        )}

        <Pagination
          totalCount={friendList.length}
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

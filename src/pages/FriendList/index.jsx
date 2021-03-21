import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputField from '../../elements/InputField';
import ListItem from '../../components/ListItem';
import Wrapper from '../../components/Wrapper';
import Pagination from '../../components/Pagination';

// Actions
import {
  addFriend,
  deleteFriend,
  toggleFavourite,
  getFriends,
} from '../../actions/friendList';

import { nextPage, prevPage } from '../../actions/pagination';

// Styled
import { Header, WidgetWrapper, NotFoundText } from './FriendList.styled';

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
  const { friendList, pagination } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Get Friends on page load
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

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
        />
        {createFriendList(
          friendList,
          handleDeleteFriend,
          handleFavouriteToggle,
          pagination.offset,
          pagination.rowsPerPage
        )}
        <Pagination
          totalCount={friendList.length}
          onNextPage={() => dispatch(nextPage())}
          onPreviousPage={() => dispatch(prevPage())}
          offset={pagination.offset}
          rowsPerPage={pagination.rowsPerPage}
        />
      </WidgetWrapper>
    </Wrapper>
  );
};

export default FriendList;

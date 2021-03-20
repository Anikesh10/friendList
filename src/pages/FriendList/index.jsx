import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputField from '../../elements/InputField';
import ListItem from '../../components/ListItem';
import Wrapper from '../../components/Wrapper';

import {
  addFriend,
  deleteFriend,
  toggleFavourite,
} from '../../actions/friendList';

// Styled
import {
  Header,
  WidgetWrapper,
  Button,
  Footer,
  PageDetails,
  NotFoundText,
} from './FriendList.styled';

// Create Friend List
const createFriendList = (friendList = [], handleDelete, onFavouriteToggle) => {
  if (!friendList.length)
    return <NotFoundText>No friends found :(</NotFoundText>;
  return friendList.map(({ name, id, favourite }) => (
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
  const { friendList } = useSelector((state) => state);
  const dispatch = useDispatch();

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
          handleFavouriteToggle
        )}
        <Footer>
          <Button>Prev</Button>
          <PageDetails>Page 1 /10</PageDetails>
          <Button>Next</Button>
        </Footer>
      </WidgetWrapper>
    </Wrapper>
  );
};

export default FriendList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputField from '../../elements/InputField';
import ListItem from '../../components/ListItem';
import Wrapper from '../../components/Wrapper';

import { addFriend, deleteFriend } from '../../actions/friendList';

// Styled
import {
  Header,
  WidgetWrapper,
  Button,
  Footer,
  PageDetails,
} from './FriendList.styled';

// Create Friend List
const createFriendList = (friendList = [], handleDelete) => {
  if (!friendList.length) return <span>No friends found :(</span>;
  return friendList.map(({ name, id, favourite }) => (
    <ListItem
      name={name}
      key={id}
      id={id}
      isFavourite={favourite}
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
    console.log('id', id);
    dispatch(deleteFriend(id));
  };

  console.log('friendsList', friendList);
  return (
    <Wrapper>
      <WidgetWrapper>
        <Header>Friend List</Header>
        <InputField type="text" onEnterPress={addNewFriend} />
        {createFriendList(friendList, handleDeleteFriend)}
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

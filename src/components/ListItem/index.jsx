import React from 'react';
import Proptypes from 'prop-types';
import { ReactComponent as StarBorder } from '../../assets/icons/svgs/star-border.svg';
import { ReactComponent as StarFill } from '../../assets/icons/svgs/star-fill.svg';
import { ReactComponent as TrashFill } from '../../assets/icons/svgs/trash-fill.svg';

// Styled elements
import {
  List,
  Icon,
  Name,
  InfoWrapper,
  Action,
  Helper,
} from './ListItem.styled';

import { textUtil } from '../../utils/text-util';

const ListItem = ({ name, onFavouriteToggle, isFavourite, onDelete, id }) => {
  return (
    <List>
      <InfoWrapper>
        <Name>{textUtil('capitalize', name)}</Name>
        <Helper>is your friend</Helper>
      </InfoWrapper>
      <Action>
        <Icon
          role="button"
          tabIndex="0"
          onClick={() => onFavouriteToggle && onFavouriteToggle(id)}
        >
          {isFavourite ? (
            <StarFill height={20} width={20} />
          ) : (
            <StarBorder height={20} width={20} />
          )}
        </Icon>
        <Icon
          role="button"
          tabIndex="0"
          onClick={() => onDelete && onDelete(id)}
        >
          <TrashFill height={20} width={20} />
        </Icon>
      </Action>
    </List>
  );
};

export default ListItem;

ListItem.propTypes = {
  name: Proptypes.string,
  onFavoriteToggle: Proptypes.func,
  isFavourite: Proptypes.bool,
  onDelete: Proptypes.func,
};

ListItem.defaultProps = {
  name: 'Unknown',
};

import PropTypes from 'prop-types';
import { Item, Status, Image, Name } from './FriendItem.styled';

export const FriendsItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status status={isOnline} />
      <Image src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

import PropTypes from 'prop-types';
import { BsCircleFill } from 'react-icons/bs';
import { Item, Status, Image, Name } from './FriendItem.styled';

export const FriendsItem = ({ item: { isOnline, avatar, name } }) => {
  return (
    <Item>
      <Status status={isOnline}>
        <BsCircleFill />
      </Status>
      <Image src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

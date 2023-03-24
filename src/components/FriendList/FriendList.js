import PropTypes from 'prop-types';
import { FriendsItem } from 'components/FriendsItem/FriendsItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return <FriendsItem key={friend.id} item={friend} />;
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

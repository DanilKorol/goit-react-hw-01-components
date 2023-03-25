import PropTypes from 'prop-types';
import {
  Label,
  ProfileCard,
  Quantity,
  SocialStats,
  UserInfo,
  UserLocation,
  UserName,
  UserPhoto,
  UserTag,
} from './Profile.styled';

export const Profile = ({ avatar, userName, tag, location, stats }) => {
  return (
    <ProfileCard>
      <UserInfo>
        <UserPhoto src={avatar} alt={userName} width="120" />
        <UserName>{userName}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>

      <SocialStats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </SocialStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

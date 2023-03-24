import PropTypes from 'prop-types';
import { Item } from './Stats.styled';

export const Stats = ({ item: { label, percentage } }) => {
  return (
    <Item>
      <span>{label}</span>
      <span>{percentage}%</span>
    </Item>
  );
};

Stats.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

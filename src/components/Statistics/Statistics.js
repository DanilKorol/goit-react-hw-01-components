import PropTypes from 'prop-types';
import { Stats } from 'components/Stats/Stats';
import { List, StatisticsCard, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(stat => {
          return <Stats key={stat.id} item={stat} />;
        })}
      </List>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

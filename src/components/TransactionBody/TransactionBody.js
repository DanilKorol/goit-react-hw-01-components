import PropTypes from 'prop-types';
import { Row } from './TransactionBody.styled';

export const TransactionBody = ({ item: { type, amount, currency } }) => {
  return (
    <Row>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Row>
  );
};

TransactionBody.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

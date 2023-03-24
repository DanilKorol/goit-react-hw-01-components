import PropTypes from 'prop-types';
import { Body, Row } from './TransactionBody.styled';

export const TransactionBody = ({ item: { type, amount, currency } }) => {
  return (
    <Body>
      <Row>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </Row>
    </Body>
  );
};

TransactionBody.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

import PropTypes from 'prop-types';
import { TransactionBody } from 'components/TransactionBody/TransactionBody';
import { Head, Table, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>

      <Body>
        {items.map(item => {
          return <TransactionBody key={item.id} item={item} />;
        })}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

import PropTypes from 'prop-types';
import { TransactionBody } from 'components/TransactionBody/TransactionBody';
import { Head, Table } from './TransactionHistory.styled';

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

      {items.map(item => {
        return <TransactionBody key={item.id} item={item} />;
      })}
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

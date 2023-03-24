import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle ';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Profile
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </Layout>
  );
};

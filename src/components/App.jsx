import { Profile } from 'components/Profile/Profile';
import user from 'user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data.json';
// import friends from 'friends.json';
// import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={data} />
    </div>
  );
};

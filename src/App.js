import "./App.css";

import Profile from "./components/Profile/Profile";
import user from "./data/user.json";

import Statistics from "./components/Statistics/Statistics";
import stats from "./data/statistical-data.json";

import FriendsList from "./components/Friends/FriendsList";
// import FriendsItem from "./components/Friends/FriendItem";
import friends from "./data/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;

import FriendListItem from "./FriendsListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnLine={isOnline}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;

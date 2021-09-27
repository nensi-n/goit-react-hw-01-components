import FriendListItem from "./FriendsListItem";
import s from "./FriendsListItem.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
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

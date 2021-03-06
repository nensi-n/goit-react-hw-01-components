import s from "./FriendsListItem.module.css";

function FriendsListItem({ name, avatar, isOnLine }) {
  return (
    <>
      <div className={isOnLine ? s.online : s.offline}></div>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

export default FriendsListItem;

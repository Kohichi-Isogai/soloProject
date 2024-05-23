const Gacha = (props) => {
  const { setFriend, setFriendView } = props;
  console.log(props);
  return (
    <button
      onClick={async () => {
        const friend = await fetch("/gacha", {
          method: "GET",
        });
        const friendData = await friend.json();
        setFriend(friendData);
        console.log(friend.ok);
        setFriendView(friend.ok);

        // console.log("返り値 ok : ", friend.ok);
      }}
    >
      ガチャを引く！
    </button>
  );
};

export default Gacha;

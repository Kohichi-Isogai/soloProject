const Gacha = (props) => {
  const { disabled, setFriend, setDisabled, setEnemy, initEnemy, setCount } =
    props;
  return (
    <button
      onClick={async () => {
        const friend = await fetch("/api/gacha", {
          method: "GET",
        });
        const friendData = await friend.json();
        setFriend(friendData);
        setEnemy(initEnemy);
        setDisabled(false);
        document.getElementById("friendHP").style.backgroundColor =
          "chartreuse";
        setCount(0);

        const myFriends = await fetch("/api/friends", {
          method: "GET",
        });
        const myFriendsData = await myFriends.json();
        const myFriendsId = myFriendsData.map((friend) => friend.friend_id);
        console.log("myFriend", myFriendsId);
        console.log("new friend", friendData.id);
        console.log(myFriendsId.includes(friendData.id));
        if (!myFriendsId.includes(friendData.id)) {
          console.log(friendData);
          await fetch("/api/friends", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(friendData),
          });
        }
      }}
      disabled={disabled}
    >
      ガチャを引く！
    </button>
  );
};

export default Gacha;

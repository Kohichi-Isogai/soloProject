const Gacha = (props) => {
  const { setFriend } = props;
  return (
    <button
      onClick={async () => {
        const friend = await fetch("/gacha", {
          method: "GET",
        });
        const friendData = await friend.json();
        setFriend(friendData);
      }}
    >
      ガチャを引く！
    </button>
  );
};

export default Gacha;

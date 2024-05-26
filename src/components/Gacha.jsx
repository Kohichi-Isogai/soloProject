const Gacha = (props) => {
  const { setFriend, setDisabled } = props;
  return (
    <button
      onClick={async () => {
        const friend = await fetch("/api/gacha", {
          method: "GET",
        });
        const friendData = await friend.json();
        setFriend(friendData);

        setDisabled(false);
      }}
    >
      ガチャを引く！
    </button>
  );
};

export default Gacha;

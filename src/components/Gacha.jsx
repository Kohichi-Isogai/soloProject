const Gacha = (props) => {
  const { disabled, setFriend, setDisabled, setEnemy, initEnemy } = props;
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
      }}
      disabled={disabled}
    >
      ガチャを引く！
    </button>
  );
};

export default Gacha;

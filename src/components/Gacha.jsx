const Gacha = (props) => {
  const { setFriend } = props;
  return (
    <button
      onClick={async () => {
        console.log("---1");
        const friend = await fetch("/api/gacha", {
          method: "GET",
        });
        console.log("---2");

        console.log("friend : ", friend);
        const friendData = await friend.json();
        console.log("---3");
        setFriend(friendData);
        console.log("---4");
      }}
    >
      ガチャを引く！
    </button>
  );
};

export default Gacha;

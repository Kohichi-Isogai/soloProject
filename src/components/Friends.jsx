import "./Friends.css";

const Friend = () => {
  const getFriends = async () => {
    const friend = await fetch("/api/friends", {
      method: "GET",
    });
    const friendData = await friend.json();
    console.log(friendData);
  };
  getFriends();
  return (
    <div id="friendArea">
      <div>ok</div>
      <div>ok</div>
      <div>ok</div>
    </div>
  );
};

export default Friend;

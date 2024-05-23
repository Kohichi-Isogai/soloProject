// import { useState } from "react";
import "./App.css";
import Gacha from "./components/Gacha";
import { useEffect, useState } from "react";

function App() {
  const [friend, setFriend] = useState({});
  const [friendView, setFriendView] = useState(false);

  useEffect(() => {
    console.log("friend : ", friend);
    console.log("friendView : ", friendView);
  }, [friend, friendView]);

  return (
    <>
      {friendView && <img id="friendImg" src={friend.url}></img>}
      <div>
        <Gacha setFriend={setFriend} setFriendView={setFriendView}></Gacha>
      </div>
    </>
  );
}

export default App;

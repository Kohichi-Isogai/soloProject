import "./App.css";
import Gacha from "./components/Gacha";
import { useEffect, useState } from "react";
import { initFriend, initEnemy } from "./data";
import Battle from "./components/Battle";

function App() {
  const [friend, setFriend] = useState(initFriend);
  const [enemy, setEnemy] = useState(initEnemy);

  useEffect(() => {
    console.log("friend : ", friend.id);
    console.log("enemy : ", enemy.id);
  }, [friend, enemy]);

  // useEffect(() =>{

  // })

  return (
    <>
      <div>
        <img id="friendImg" src={friend.url}></img>
        <span id="vs">vs</span>
        <img id="enemyImg" src={enemy.url}></img>
      </div>
      <div>
        <Gacha setFriend={setFriend}></Gacha>
        <br />
        <Battle setEnemy={setEnemy}></Battle>
      </div>
    </>
  );
}

export default App;

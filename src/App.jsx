import "./App.css";
import Gacha from "./components/Gacha";
import { useEffect, useState } from "react";
import { initFriend, initEnemy } from "./data";
import Battle from "./components/Battle";
import BattleLog from "./components/BattleLog";
import Home from "./components/Home";
import TabBar from "./components/TabBar";
import ImgArea from "./components/ImgArea";
import Friend from "./components/Friends";

function App() {
  const [friend, setFriend] = useState(initFriend);
  const [enemy, setEnemy] = useState(initEnemy);
  const [disabled, setDisabled] = useState(true);
  const [battleLog, setBattleLog] = useState([]);
  const [page, setPage] = useState("home");
  const [imgView, setImgView] = useState(false);
  const [count, setCount] = useState(0);
  const [myFriends, setMyFriends] = useState([]);
  const getFriends = async () => {
    const friend = await fetch("/api/friends", {
      method: "GET",
    });
    const friendData = await friend.json();
    setMyFriends(friendData);
    console.log(myFriends);
  };
  // useEffect(() => {
  //   document.getElementById("battleButton").disabled = true;
  // }, []);

  useEffect(() => {
    let url = "";
    if (page === "home") {
      url = "src/img/bar.jpg";
      setImgView(false);
    } else if (page === "battle") {
      url = "src/img/grasslands.jpg";
      setImgView(true);
    } else if (page === "friend") {
      url = "src/img/lodgingsHouse.jpg";
      setImgView(false);

      getFriends();
    }
    document.getElementById("base").style.backgroundImage = `url("${url}")`;
  }, [page]);

  // useEffect(() => {
  //   console.log("friend : ", friend.id);
  //   console.log("enemy : ", enemy.id);
  // }, [friend]);

  useEffect(() => {
    const courseOfTheBattle = [];
    if (enemy.id < 99) {
      let isInBattle = true;
      while (isInBattle) {
        if (friend.hp > 0) {
          enemy.hp = enemy.hp - friend.attack;
          courseOfTheBattle.push(
            `敵に${friend.attack}のダメージ！ 敵の残りHP:${enemy.hp}`
          );
          // setEnemy(enemy);
          if (enemy.hp > 0) {
            friend.hp = friend.hp - enemy.attack;
            courseOfTheBattle.push(
              `味方に${enemy.attack}のダメージ！ 味方の残りHP:${friend.hp}`
            );

            // setFriend(friend);
          } else {
            courseOfTheBattle.push("勝利！！！");
            courseOfTheBattle.push(`${count}連勝目！`);
            isInBattle = false;
          }
        } else {
          courseOfTheBattle.push("敗北...");
          courseOfTheBattle.push(`結果 : ${count - 1}連勝！`);
          isInBattle = false;
          setDisabled(true);
        }
      }
    }
    setBattleLog(courseOfTheBattle);
  }, [enemy]);

  return (
    <div id="base">
      {page === "home" ? (
        <Home setImgView={setImgView}></Home>
      ) : page === "battle" ? (
        <div id="battle">
          <ImgArea friend={friend} enemy={enemy} imgView={imgView}></ImgArea>
          <div>
            <Gacha
              setFriend={setFriend}
              disabled={!disabled}
              setDisabled={setDisabled}
              setEnemy={setEnemy}
              initEnemy={initEnemy}
              setCount={setCount}
            ></Gacha>
            <Battle
              setEnemy={setEnemy}
              disabled={disabled}
              setCount={setCount}
            ></Battle>
          </div>
          <BattleLog battleLog={battleLog}></BattleLog>
        </div>
      ) : (
        <Friend
          setImgView={setImgView}
          myFriends={myFriends}
          setMyFriends={setMyFriends}
        ></Friend>
      )}
      <TabBar setPage={setPage}></TabBar>
    </div>
  );
}

export default App;

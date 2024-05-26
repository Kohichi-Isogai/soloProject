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
    } else {
      url = "src/img/lodgingsHouse.jpg";
      setImgView(false);
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
            isInBattle = false;
          }
        } else {
          courseOfTheBattle.push("敗北...");
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
            ></Gacha>
            <br />
            <Battle
              setEnemy={setEnemy}
              disabled={disabled}
              setDisabled={setDisabled}
            ></Battle>
          </div>
          {/* <div id="battleLogBox1"> */}
          <BattleLog battleLog={battleLog}></BattleLog>
          {/* </div> */}
        </div>
      ) : (
        <Friend setImgView={setImgView}></Friend>
      )}
      <TabBar setPage={setPage}></TabBar>
    </div>
  );
}

export default App;

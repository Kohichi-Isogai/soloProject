import "./App.css";
import Gacha from "./components/Gacha";
import { useEffect, useState } from "react";
import { initFriend, initEnemy } from "./data";
import Battle from "./components/Battle";
import BattleLog from "./components/BattleLog";

function App() {
  const [friend, setFriend] = useState(initFriend);
  const [enemy, setEnemy] = useState(initEnemy);
  const [disabled, setDisabled] = useState(true);
  const [battleLog, setBattleLog] = useState([]);

  // useEffect(() => {
  //   document.getElementById("battleButton").disabled = true;
  // }, []);

  useEffect(() => {
    console.log("friend : ", friend.id);
    console.log("enemy : ", enemy.id);
  }, [friend]);

  useEffect(() => {
    // console.log("friend : ", friend);
    console.log("=====================");
    /*
      id: 1,
      name: "friend1",
      attack: 3,
      hp: 15,
      url: "https://blogger.googleusercontent.com/img/a/AVvXsEjyeJgJIrzCF5Ck3iDJAS25qLd7P02PixI-UWNgtSyq5YHPa9v5ngQgeJIjoRypNDVpQrAyKh3I4EZnFXMAgQIrsDfF5dCTNY_VPrOmkNWO18doT6xehVo70halIYqycSTnfxjffLXgcrGmRu-F4KweGragY9pRkKtvB40s7FrvuI4sUD0XRRkqh0pltw=s805",
    };
    */

    // console.log("enemy : ", enemy);
    /*
      "id": 2,
      "name": "enemy2",
      "attack": 5,
      "hp": 8,
      "url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgY8f3qQzm8dg9bhDi4oeL1Z9wgU1DNYGYZW67MEsnoQrC9W4xqghwa0T19ULsvheFNkuy7-9dRx97jCTW916iK2jkB1_lGpp2GtLHgLasu3PVdWNer6RBAOWixmnOMA7E4C8itZfZ5P9ix/s800/fantasy_kerberos.png"
  }
  */
    // const battle = (turn, friend, enemy) => {
    //   if(turn) {

    //   }
    // }
    console.log("while out");
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
            courseOfTheBattle.push("friend is win");
            isInBattle = false;
          }
        } else {
          courseOfTheBattle.push("enemy is win");
          isInBattle = false;
        }
      }
    }
    setBattleLog(courseOfTheBattle);
    console.log(friend);
    console.log(enemy);
    console.log(battleLog);
  }, [enemy]);

  return (
    <div id="base">
      <div>
        <img id="friendImg" src={friend.url}></img>
        <span id="vs">vs</span>
        <img id="enemyImg" src={enemy.url}></img>
      </div>
      <div>
        <Gacha setFriend={setFriend} setDisabled={setDisabled}></Gacha>
        <br />
        <Battle setEnemy={setEnemy} disabled={disabled}></Battle>
      </div>
      <BattleLog battleLog={battleLog}></BattleLog>
    </div>
  );
}

export default App;

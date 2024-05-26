import "./ImgArea.css";

const ImgArea = (props) => {
  const { friend, enemy, imgView } = props;
  if (enemy.id < 99 && imgView) {
    document.getElementById("friendHP").style.backgroundColor =
      friend.hp > 0 ? "chartreuse" : "red";

    document.getElementById("enemyHP").style.backgroundColor =
      enemy.hp > 0 ? "chartreuse" : "red";
  }

  return (
    <div id="imgArea">
      <p>
        <span id="friendHP">HP : {friend.hp}</span>
        <span id="enemyHP">HP : {enemy.hp}</span>
      </p>
      <img id="friendImg" src={friend.url}></img>
      <span id="vs">vs</span>
      <img id="enemyImg" src={enemy.url}></img>
    </div>
  );
};

export default ImgArea;

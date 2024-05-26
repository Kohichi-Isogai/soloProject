import "./BattleLog.css";

const BattleLog = (props) => {
  const { battleLog } = props;
  console.log("log : ", battleLog);
  return (
    <div id="battleLogBox">
      <ol>
        {battleLog.map((battle, i) => (
          <li key={i} className="logText">
            {battle}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BattleLog;

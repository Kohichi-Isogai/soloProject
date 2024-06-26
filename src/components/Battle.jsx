import "./Battle.css";

const Battle = (props) => {
  const { setEnemy, disabled, setCount } = props;

  return (
    <button
      id="battleButton"
      onClick={async () => {
        const result = await fetch("/api/battles", {
          method: "GET",
        });
        const enemy = await result.json();
        setEnemy(enemy);
        let url =
          enemy.id === 1
            ? "src/img/grasslands.jpg"
            : enemy.id === 2
            ? "src/img/cave.jpg"
            : "src/img/castle.jpg";
        document.getElementById("base").style.backgroundImage = `url("${url}")`;
        setCount((count) => count + 1);
      }}
      disabled={disabled}
    >
      戦う
    </button>
  );
};

export default Battle;

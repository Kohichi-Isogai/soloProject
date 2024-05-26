const Battle = (props) => {
  const { setEnemy, disabled } = props;

  return (
    <button
      id="battleButton"
      onClick={async () => {
        const result = await fetch("/api/battles", {
          method: "GET",
        });
        const enemy = await result.json();
        setEnemy(enemy);
        console.log("in");
      }}
      disabled={disabled}
    >
      戦う
    </button>
  );
};

export default Battle;

const Battle = (props) => {
  const { setEnemy } = props;
  return (
    <button
      onClick={async () => {
        const result = await fetch("/api/battles", {
          method: "GET",
        });
        const enemy = await result.json();
        setEnemy(enemy);
      }}
    >
      戦う
    </button>
  );
};

export default Battle;

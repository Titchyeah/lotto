import Button from './Button.js';

function PlayersChoice({ chosen, winners }) {
  const renderedChoices = chosen.map((choice, index) => {
    return (
      <Button bingo disabled selected={winners.includes(choice)} key={choice}>
        {choice}
      </Button>
    );
  });
  console.log(renderedChoices);

  const renderedWinners = winners.map((choice, index) => {
    return (
      <div key={index}>
        <Button bingo disabled key={choice}>
          {choice}
        </Button>
      </div>
    );
  });

  const winCheck = (winners, chosen) => {
    return (
      <div>
        {winners}
        {chosen}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      Players Choice
      <div className="flex justify-center m-2">{renderedChoices}</div>
      Winning Numbers
      <div className="flex justify-center m-2">{renderedWinners}</div>
      {winCheck()}
    </div>
  );
}

export default PlayersChoice;

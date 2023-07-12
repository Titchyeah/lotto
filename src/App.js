import { useEffect, useState } from 'react';
import Button from './components/Button.js';
import PlayersChoice from './components/PlayersChoice.js';
import SelectionCard from './components/SelectionCard.js';
import WinningBall from './components/WinningBall.js';
import Modal from './components/Modal.js';

function App() {
  const [winner, setWinner] = useState();
  const [playersChoice, setPlayersChoice] = useState([]);
  const [winningBalls, setWinningBalls] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [complete, setComplete] = useState(false);
  const [balance, setBalance] = useState(100);

  function returnElementsFromArray(array) {
    let currentIndex = 0;

    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (currentIndex < array.length) {
          const element = array[currentIndex];
          setWinner(element);
          currentIndex++;
        } else {
          // setPlaying(false);
          setWinner('');
          setComplete(true);
          clearInterval(interval);
          resolve();
        }
      }, 800);
    });
  }

  const clearPopup = () => {
    setComplete(false);
    setPlaying(false);
  };

  const newGameButton = (
    <div>
      <Button primary onClick={clearPopup}>
        New Game
      </Button>
    </div>
  );

  function checkForWinners(playersChoice, winningBalls) {
    let count = 0;
    for (let i = 0; i < playersChoice.length; i++) {
      if (winningBalls.includes(playersChoice[i])) {
        count++;
      }
    }
    return count;
  }

  const winMessages = [
    'Unlucky, you have matched no numbers. Better luck next time.',
    'Unlucky, you have matched 1 number. Better luck next time.',
    'Unlucky, you have matched 2 numbers. Better luck next time.',
    'Congratulations, you have matched 3 numbers! You have won £50.',
    'Congratulations, you have matched 4 numbers! You have won £100.',
    'Congratulations, you have matched 5 numbers! You have won £200.',
    'Congratulations, you have matched 6 numbers! You have won £500.',
  ];

  const winAwards = [0, 0, 0, 50, 100, 200, 500];

  const winMessage = () => {
    let winAmount = checkForWinners(playersChoice, winningBalls);
    return winMessages[winAmount];
  };
  const calculateWinnings = (winners) => {
    let winAmount = checkForWinners(playersChoice, winners);
    let newBalance = balance + winAwards[winAmount];
    setBalance(newBalance);
  };

  const congratsPopup = (
    <Modal onClose={clearPopup} actionBar={newGameButton}>
      <PlayersChoice
        title="Player's Choice"
        chosen={playersChoice}
        winners={winningBalls}
      />
      <p>{winMessage()}</p>
    </Modal>
  );
  useEffect(() => {
    if(complete){
      calculateWinnings(winningBalls);
    }
  }, [complete])
  

  function onLuckyDipClicked() {
    setPlayersChoice(generateSixnumbers());
  }

  function onResetClicked() {
    setPlayersChoice([]);
  }

  // function onNewGameClicked() {
  //   setPlayersChoice([]);
  //   setWinningBalls([]);
  // }

  function onPlayGameClicked() {
    let newBalance = balance - 1;
    setBalance(newBalance);
    setPlaying(true);
    const winners = generateSixnumbers();
    setWinningBalls(winners);
    returnElementsFromArray(winners);
  }

  function generateSixnumbers() {
    var arr = [];
    while (arr.length < 6) {
      var r = Math.floor(Math.random() * 59) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  const updatePlayersChoice = (playersChoice) => {
    setPlayersChoice(playersChoice);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#2F2F2F] items-center">
      {complete && congratsPopup}
      <div className="w-full flex">
        <div className="flex w-1/4 justify-center text-xl text-[#FFDD4A]">
          Balance: £{balance}
        </div>
        <div className="w-1/2 flex justify-center items-center my-1 font-bold text-3xl text-[#FFDD4A]">
          Lotto
        </div>
      </div>
      <div className="flex justify-center max-w-screen-md">
        {playing ? (
          <WinningBall winner={winner} choices={playersChoice} />
        ) : (
          <SelectionCard
            updateChoice={updatePlayersChoice}
            playClicked={onPlayGameClicked}
            luckyClicked={onLuckyDipClicked}
            resetClicked={onResetClicked}
          />
        )}
      </div>
    </div>
  );
}

export default App;

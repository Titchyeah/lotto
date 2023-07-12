import { useEffect, useState } from 'react';
import Button from './Button.js';

function SelectionCard({ updateChoice, playClicked, resetClicked }) {
  const [pressedButtons, setPressedButtons] = useState([]);

  const handleButtonClick = (buttonValue) => {
    if (pressedButtons.length > 5 && !pressedButtons.includes(buttonValue)) {
      alert('Error: maximum selections reached');
      return;
    }
    if (!pressedButtons.includes(buttonValue)) {
      setPressedButtons([...pressedButtons, buttonValue]);
    } else {
      const newButtons = [...pressedButtons];
      const index = pressedButtons.indexOf(buttonValue);
      newButtons.splice(index, 1);
      setPressedButtons(newButtons);
    }
  };

  function generateSixnumbers() {
    var arr = [];
    while (arr.length < 6) {
      var r = Math.floor(Math.random() * 59) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log('array = ', arr);
    return arr;
  }

  function handleReset() {
    resetClicked();
    setPressedButtons([]);
  }

  function handleLuckyDip() {
    handleReset();
    setPressedButtons(generateSixnumbers);
  }

  useEffect(() => {
    updateChoice(pressedButtons);
  }, [pressedButtons]);

  const isPressed = (buttonValue) => {
    if (pressedButtons.includes(buttonValue)) {
      return 'selected';
    }
  };

  const renderedButtons = () => {
    const buttons = [];
    for (let i = 1; i < 60; i++) {
      buttons.push(
        <Button
          bingo
          selected={isPressed(i)}
          key={i}
          onClick={() => handleButtonClick(i)}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  const renderedChoices = () => {
    const buttons = [];
    for (let i = 0; i < pressedButtons.length; i++) {
      buttons.push(
        <Button bingo key={i}>
          {pressedButtons[i]}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <div className="md:max-w-4/5 justify-center">
      <div className="flex justify-center">
        <Button
          primary
          onClick={playClicked}
          disabled={pressedButtons.length < 6}
        >
          Play Game
        </Button>
        <div className="flex justify-center mx-2">
          <Button secondary onClick={handleReset}>
            Reset Game
          </Button>
        </div>
        <Button primary onClick={handleLuckyDip}>
          Lucky Dip
        </Button>
      </div>
      <h2 className="flex justify-center border text-center text-white font-bold m-2">
        Please choose 6 numbers or click lucky dip to have 6 random numbers
        picked for you
      </h2>
      <div className="flex flex-col justify-center items-center">
        Selection Choice
        <div className="flex flex-wrap w-9/12 justify-center max-w-1/2">
          {renderedButtons()}
        </div>
        Players Choice:
        <div className="flex justify-center m-1">{renderedChoices()}</div>
      </div>
    </div>
  );
}

export default SelectionCard;

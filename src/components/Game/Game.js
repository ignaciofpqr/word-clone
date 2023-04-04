import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Input from "../Input";
import GuessWrapper from "../GuessWrapper/GuessWrapper";
import WinnerLoserBanner from "../WinnerLoserBanner/WinnerLoserBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function handleSubmiteGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      {gameStatus !== "running" && (
        <WinnerLoserBanner
          gameStatus={gameStatus}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
      <GuessWrapper guesses={guesses} answer={answer} />
      <Input handleSubmitGuess={handleSubmiteGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;

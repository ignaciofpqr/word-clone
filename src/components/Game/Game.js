import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import GuessWrapper from "../GuessWrapper/GuessWrapper";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmiteGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessWrapper guesses={guesses} />
      <Input handleSubmitGuess={handleSubmiteGuess} />
    </>
  );
}

export default Game;

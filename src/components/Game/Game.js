import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guess, setGuess] = useState('');

  function runGuess(guess) {
    window.alert('Youve searched: nada')
  }

  return (
    <>
      <Input runGuess={runGuess} setGuess={setGuess} guess={guess} />
    </>
  );
}

export default Game;

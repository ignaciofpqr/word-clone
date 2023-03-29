import React, {useState} from "react";


function Input( {runGuess, setGuess, guess} ) {

  function handleSubmit(event) {
    event.preventDefault()
    console.log({guess});
    if (guess.length !== 5){
      window.alert('You need to send exactly 5 characters!');
      return;
    }
    setGuess('')
  }

  return (
    <>
      <form 
        className="guess-input-wrapper" 
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">
          Enter guess:
        </label>
        <input 
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          id="guess-input" 
          type="text"
          value={guess}
          onChange={
            (event) => {
              const nextGuess = event.target.value.toUpperCase();
              setGuess(nextGuess);
            }
          }
        >
        </input>
      </form>
    </>
  );
}

export default Input;

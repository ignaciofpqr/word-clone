import React, {useState} from "react";


function Input({ handleSubmitGuess }) {
  
  const [tentativeGuess, setTentativeGuess] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
    console.log('this was your guess: ', tentativeGuess)
    setTentativeGuess('')
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
          value={tentativeGuess}
          onChange={
            (event) => {
              const nextGuess = event.target.value.toUpperCase();
              setTentativeGuess(nextGuess);
            }
          }
        >
        </input>
      </form>
    </>
  );
}

export default Input;

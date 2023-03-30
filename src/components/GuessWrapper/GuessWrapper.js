import React from "react";

function GuessWrapper({ guesses }) {
  return (
    <>
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessWrapper;

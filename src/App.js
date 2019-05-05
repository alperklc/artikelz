import React, { useState, useEffect } from 'react';
import Choices from './components/Choices';
import Scoreboard from './components/Scoreboard';
import { initialState, answeredState, loadNextQuestion, loadWords } from './state';

import './App.css';

const LEFT_ARROW_KEY_CODE = 37
const UP_ARROW_KEY_CODE = 38
const RIGHT_ARROW_KEY_CODE = 39

function App () {
  const [state, setState] = useState(initialState)

  const submitAnswer = (answer) => {
    answeredState(state, setState, answer, state.words)

    setTimeout(() => {
      loadNextQuestion(state, setState)
    }, 1000)
  }

  const handleKeydown = (e) => {
    e.preventDefault()

    if (e.keyCode === LEFT_ARROW_KEY_CODE) {
      submitAnswer('Der')
    } else if (e.keyCode === UP_ARROW_KEY_CODE) {
      submitAnswer('Die')
    } else if (e.keyCode === RIGHT_ARROW_KEY_CODE) {
      submitAnswer('Das')
    }
  }

  useEffect(() => {
    loadWords(state, setState)
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    };
  }, [])

  const gameFinished = state.cursor === state.words.length - 1

  return (
    <div className='app'>
      {state.loading ? <span>Loading...</span> :
      <React.Fragment>{!gameFinished ?
        <React.Fragment>
          <Scoreboard rightCount={state.rightCount} wrongCount={state.wrongCount} />
          <div className='question'>
            <h2>{state.words[state.cursor].noun}</h2>
          </div>
          <div className='result'>
            {!!state.result && <span className={state.result === 'Correct !' ? 'result--correct' : 'result--wrong'}>
              {state.result}
            </span>}
          </div>
          <Choices locked={state.locked} answer={state.answer} rightAnswer={state.rightAnswer} submitAnswer={submitAnswer} />
        </React.Fragment> :
          <div className='game-over'>
            <h1>Game over!</h1>
            <Scoreboard rightCount={state.rightCount} wrongCount={state.wrongCount} />
            {state.wrongAnswers.map((wrongAnswer, index) => (<div key={index}>{wrongAnswer.article} {wrongAnswer.noun}</div>))}
          </div>
        }</React.Fragment>
      }
    </div>
  );
}

export default App;

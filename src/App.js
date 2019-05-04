import React, { useState, useEffect } from 'react';
import Choices from './components/Choices';
import Scoreboard from './components/Scoreboard';
import { initialState, answeredState, loadNextQuestion } from './state';

import './App.css';

const words = [{ article: 'das', noun: 'Frühstuck' },
{ article: 'das', noun: 'Mittagessen' },
{ article: 'das', noun: 'Abendessen' },
{ article: 'der', noun: 'Snack' },
{ article: 'das', noun: 'Dessert' },
{ article: 'der', noun: 'Kuchen' },
{ article: 'das', noun: 'Brot' },
{ article: 'die', noun: 'Milch' },
{ article: 'das', noun: 'Ei' },
{ article: 'das', noun: 'Mehl' },
{ article: 'der', noun: 'Zucker' },
{ article: 'das', noun: 'Fleisch' },
{ article: 'der', noun: 'Truthahn' },
{ article: 'das', noun: 'Schweinefleisch' },
{ article: 'das', noun: 'Huhn' },
{ article: 'der', noun: 'Tofu' },
{ article: 'der', noun: 'Salat' },
{ article: 'die', noun: 'Pizza' },
{ article: 'die', noun: 'Cracker' },
{ article: 'das', noun: 'Müsli' },
{ article: 'das', noun: 'Haferflocken' },
{ article: 'die', noun: 'Pfannkuchen' },
{ article: 'der', noun: 'Speck' },
{ article: 'die', noun: 'Schokolade' },
{ article: 'das', noun: 'Obst' },
{ article: 'das', noun: 'Gemüse' },
{ article: 'der', noun: 'Aprfel' },
{ article: 'die', noun: 'Karotte' },
{ article: 'die', noun: 'Birne' },
{ article: 'die', noun: 'Banane' },
{ article: 'die', noun: 'Tomate' },
{ article: 'die', noun: 'Kartoffel' },
{ article: 'der', noun: 'Sellerie' },
{ article: 'der', noun: 'Brokkoli' },
{ article: 'die', noun: 'Zwiebel' },
{ article: 'die', noun: 'Gurke' },
{ article: 'die', noun: 'Zucchini' },
{ article: 'der', noun: 'Pfirsich' },
{ article: 'die', noun: 'Nuss' },
{ article: 'der', noun: 'Rosenkohl' },
{ article: 'die', noun: 'Lasagna' },
{ article: 'die', noun: 'Spaghetti' },
{ article: 'die', noun: 'Makkaroni' },
{ article: 'die', noun: 'Erdnussbutter' },
{ article: 'das', noun: 'Gelee' },
{ article: 'das', noun: 'Sandwich' },
{ article: 'der', noun: 'Burger' },
{ article: 'die', noun: 'Pommes' },
{ article: 'die', noun: 'Suppe' },
{ article: 'der', noun: 'Fisch' },
{ article: 'der', noun: 'Reis' },
{ article: 'die', noun: 'Bohnen' },
{ article: 'der', noun: 'Burrito' },
{ article: 'der', noun: 'Schinken' },
{ article: 'die', noun: 'Pasta' }]

const LEFT_ARROW_KEY_CODE = 37
const UP_ARROW_KEY_CODE = 38
const RIGHT_ARROW_KEY_CODE = 39

function App () {
  const [state, setState] = useState(initialState)

  const submitAnswer = (answer) => {
    answeredState(state, setState, answer, words)

    setTimeout(() => {
      loadNextQuestion(state, setState)
    }, 1000)
  }

  const handleKeydown = (e) => {
    e.preventDefault()

    if (e.keyCode === LEFT_ARROW_KEY_CODE) {
      submitAnswer('der')
    } else if (e.keyCode === UP_ARROW_KEY_CODE) {
      submitAnswer('die')
    } else if (e.keyCode === RIGHT_ARROW_KEY_CODE) {
      submitAnswer('das')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    };
  }, [])

  const gameFinished = state.cursor === words.length - 1

  return (
    <div className='app'>
      {!gameFinished ?
        <React.Fragment>
          <Scoreboard rightCount={state.rightCount} wrongCount={state.wrongCount} />
          <div className='question'>
            <h2>{words[state.cursor].noun}</h2>
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
        }
    </div>
  );
}

export default App;

import React from 'react'

const Choices = (props) => {
  const isRightAnswer = props.answer === props.rightAnswer
  return (
    <div className='choices'>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'der' && (isRightAnswer ? 'choice--green' : 'choice--red')}`}
        onClick={() => props.submitAnswer('der')}
      >
        der
      </button>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'die' && (isRightAnswer ? 'choice--green' : 'choice--red')}`}
        onClick={() => props.submitAnswer('die')}
      >
        die
      </button>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'das' && (isRightAnswer ? 'choice--green' : 'choice--red')}`}
        onClick={() => props.submitAnswer('das')}
      >
        das
      </button>
    </div>
  )
}

export default Choices
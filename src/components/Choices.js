import React from 'react'

const Choices = (props) => {
  const highlightButton = props.answer === props.rightAnswer ? 'choice--green' : 'choice--red'

  return (
    <div className='choices'>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'der' && highlightButton}`}
        onClick={() => props.submitAnswer('der')}
      >
        der
      </button>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'die' && highlightButton}`}
        onClick={() => props.submitAnswer('die')}
      >
        die
      </button>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'das' && highlightButton}`}
        onClick={() => props.submitAnswer('das')}
      >
        das
      </button>
    </div>
  )
}

export default Choices
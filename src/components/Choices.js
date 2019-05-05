import React from 'react'

const Choices = (props) => {
  const highlightButton = props.answer === props.rightAnswer ? 'choice--green' : 'choice--red'

  return (
    <div className='choices'>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'Der' && highlightButton}`}
        onClick={() => props.submitAnswer('Der')}
      >
        der
      </button>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'Die' && highlightButton}`}
        onClick={() => props.submitAnswer('Die')}
      >
        die
      </button>
      <button
        disabled={props.locked}
        className={`choice ${props.rightAnswer === 'Das' && highlightButton}`}
        onClick={() => props.submitAnswer('Das')}
      >
        das
      </button>
    </div>
  )
}

export default Choices
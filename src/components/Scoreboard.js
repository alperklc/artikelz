import React from 'react'

const Scoreboard = (props) => (
  <div className='scoreboard'>
    <span className='score--right'>{props.rightCount}</span>
    <span className='score--wrong'>{props.wrongCount}</span>
  </div>)

export default Scoreboard

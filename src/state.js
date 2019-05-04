
const initialState = {
  cursor: 0,
  locked: false,
  rightCount: 0,
  wrongCount: 0,
  wrongAnswers: [],
  result: '',
  answer: '',
  rightAnswer: '',
}

const answeredState = (state, setState, answer, words) => {
  const rightAnswer = words[state.cursor].article

  setState({
    ...state,
    rightAnswer,
    answer,
    locked: true,
    ...(answer === rightAnswer ? {
      rightCount: ++state.rightCount,
      result: 'Correct !',
    } : {
      wrongCount: ++state.wrongCount,
      wrongAnswers: state.wrongAnswers.push(words[state.cursor]),
      result: 'Wrong :/',
    })
  })
}

const resetState = (state) => ({
  ...state,
  result: '',
  rightAnswer: '',
  answer: '',
  locked: false
})

const loadNextQuestion = (state, setState) => {
  setState({
    ...resetState(state),
    cursor: ++state.cursor,
  })
}

export { initialState, answeredState, loadNextQuestion }
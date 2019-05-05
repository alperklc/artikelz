import { loadWords as loadWordsFromCloud } from './data';

const initialState = {
  words: [],
  loading: true,
  cursor: 0,
  locked: false,
  rightCount: 0,
  wrongCount: 0,
  wrongAnswers: [],
  result: '',
  answer: '',
  rightAnswer: '',
}

const loadWords = async (state, setState) => {
  const { data } = await loadWordsFromCloud()

  setState({
    ...state,
    words: [...data],
    loading: false,
  })
}

const answeredState = (state, setState, answer, words) => {
  const rightAnswer = state.words[state.cursor].article

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
      wrongAnswers: state.wrongAnswers.push(state.words[state.cursor]),
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

export { initialState, answeredState, loadNextQuestion, loadWords }
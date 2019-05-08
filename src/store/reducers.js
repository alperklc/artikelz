
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

const types = {
  FETCH_WORDS: 'FETCH_WORDS',
  NEXT_QUESTION: 'NEXT_QUESTION',
  SUBMIT_ANSWER: 'SUBMIT_ANSWER',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WORDS:
      return {
        ...state,
        words: [...action.payload],
        loading: false,
      }
    case types.NEXT_QUESTION:
      return {
        ...state,
        result: '',
        rightAnswer: '',
        answer: '',
        locked: false,
        cursor: ++state.cursor,
      }
    case types.SUBMIT_ANSWER:
      const rightAnswer = state.words[state.cursor].article
      const wrongAnswers = [...state.wrongAnswers, state.words[state.cursor]]

      return {
        ...state,
        rightAnswer,
        answer: action.payload,
        locked: true,
        ...(action.payload === rightAnswer ? {
          rightCount: ++state.rightCount,
          result: 'Correct !',
        } : {
          wrongCount: ++state.wrongCount,
          wrongAnswers,
          result: 'Wrong :/',
        })
      }
    default:
      return state
  }
}

export {initialState, types, reducer};
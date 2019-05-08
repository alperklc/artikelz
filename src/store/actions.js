import { loadWords as loadWordsFromCloud } from '../data';

import { types } from './reducers';

export const useActions = (state, dispatch) => ({
  fetchWords: async () => {
    const { data } = await loadWordsFromCloud()
    dispatch({ type: types.FETCH_WORDS, payload: data })
  },
  nextQuestion: data => dispatch({ type: types.NEXT_QUESTION, payload: data }),
  submitAnswer: data => dispatch({ type: types.SUBMIT_ANSWER, payload: data }),
  reset: data => dispatch({ type: types.RESET, payload: data })
});
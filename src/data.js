import axios from 'axios'

const loadWords = () => {
  return axios.get('https://europe-west1-artikelz.cloudfunctions.net/getRandomNNouns')
}

export { loadWords }

import Axios from 'axios'

export const HTTP = Axios.create({
  baseURL: 'https://baconipsum.com/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

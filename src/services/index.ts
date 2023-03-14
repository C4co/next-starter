import Axios from 'axios'
import { useQuery } from 'react-query'

export const HTTP = Axios.create({
  baseURL: 'https://baconipsum.com/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export function useLoremIpsum() {
  return useQuery('lorem_ipsum', async () => {
    const response = await HTTP.get(
      '/api/?type=all-meat&paras=1&start-with-lorem=1'
    )
    return response.data
  })
}

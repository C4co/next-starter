import { useQuery } from 'react-query'
import { HTTP } from '@/services'

export function useLoremIpsum() {
  return useQuery('lorem_ipsum', async () => {
    const response = await HTTP.get(
      '/api/?type=all-meat&paras=1&start-with-lorem=1'
    )
    return response.data
  })
}

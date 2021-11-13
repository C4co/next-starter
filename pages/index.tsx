import { Page } from '@/templates'
import { useLoremIpsum } from '@/services'

export default function Home(){
  const { data, isError, isLoading } = useLoremIpsum()

  if(isLoading){
    return (
      <Page>
        <h1> loading... </h1>
       </Page>
    )
  }

  if(isError){
    return (
      <Page>
        <h1> error </h1>
      </Page>
    )
  }

  console.log(data)

  return (
    <Page>
      <h1> home page </h1>
    </Page>
  )
}

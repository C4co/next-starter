import { Page } from '@/layouts'
import { useLoremIpsum } from '@/services'
import { ThemeChanger } from '@/components'

export default function Home() {
  const { data, isError, isLoading } = useLoremIpsum()

  if (isLoading) {
    return (
      <Page>
        <h1 className="font-bold"> loading... </h1>
      </Page>
    )
  }

  if (isError) {
    return (
      <Page>
        <h1 className="font-bold text-red-500"> error </h1>
      </Page>
    )
  }

  return (
    <Page>
      <ThemeChanger />
      <h1 className="font-bold text-color"> home page </h1>
    </Page>
  )
}

import { Page } from '@/layouts'
import { useLoremIpsum } from '@/repositories'
import { ThemeChanger } from '@/components'

export default function Home() {
  const { data, isError, isLoading } = useLoremIpsum()

  if (isLoading) {
    return (
      <Page>
        <p className="text-color text-lg"> Loading... </p>
      </Page>
    )
  }

  if (isError) {
    return (
      <Page>
        <h1 className="text-red-500 text-lg"> Something went wrong </h1>
      </Page>
    )
  }

  return (
    <Page>
      <ThemeChanger />
      <h1 className="text-color text-2xl"> Next Starter </h1>
    </Page>
  )
}

import Head from 'next/head'

type PageProps = {
  children: any
  title?: string
}

export function Page({ children, title = 'Next Starter' }: PageProps) {
  return (
    <div className="min-h-screen bg-color flex flex-col gap-4 justify-center items-center">
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </div>
  )
}

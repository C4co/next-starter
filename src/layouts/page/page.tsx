import Head from 'next/head'

type PageProps = {
  children: any
  title?: string
}

export function Page({ children, title = 'Next Starter' }: PageProps) {
  return (
    <div className="min-h-screen bg-color">
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </div>
  )
}

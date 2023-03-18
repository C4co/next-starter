import '@fontsource/roboto-condensed/400.css'
import '@fontsource/roboto-condensed/700.css'
import '../styles/global.css'
import '../styles/app.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from 'next-themes'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import { CONTENT } from '../content'

i18n.use(initReactI18next).init(CONTENT)

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp

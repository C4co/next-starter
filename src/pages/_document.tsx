import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* open Graph */}

          <meta property="og:title" content="Next app starter - title" />
          <meta property="og:type" content="Next app starter - description" />
          <meta property="og:url" content="next-starter-project.netlify.app" />
          <meta property="og:image" content="/og.jpg" />
          <meta property="og:type" content="website" />

          {/* twitter */}

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="next-starter-project.netlify.app"
          />
          <meta
            property="twitter:url"
            content="next-starter-project.netlify.app"
          />
          <meta name="twitter:title" content="Next app starter - title" />
          <meta
            name="twitter:description"
            content="Next app starter - description"
          />
          <meta name="twitter:image" content="/og.jpg" />

          {/* icons */}

          <meta name="msapplication-TileColor" content="#da532c " />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/icon-32x32.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/icon-16x16.png"
          />

          {/* app */}

          <meta name="application-name" content="CN Next Starter" />

          <meta name="theme-color" content="#000000" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta
            name="msapplication-starturl"
            content="next-starter-project.netlify.app"
          />

          <meta name="apple-mobile-web-app-title" content="CN Next Starter" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

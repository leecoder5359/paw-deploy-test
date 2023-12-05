import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>쿠팡이츠</title>
        <meta
          name="description"
          content="패스트캠퍼스 쿠팡이츠 클론코딩 프로젝트"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#317EFB"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

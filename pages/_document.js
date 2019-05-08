import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <html>
        <Head>
          <link
            href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css'
            rel='stylesheet'
          />
          <link href="/static/images/favicon.ico" rel="shortcut icon"></link>
        </Head>
        <body className='custom_class'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

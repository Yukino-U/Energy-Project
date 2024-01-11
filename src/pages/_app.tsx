import "@/styles/globals.css"
import { NextPage } from "next"
import { AppProps } from "next/app"
import Head from "next/head"

import { MantineProvider } from "@mantine/core"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <main className="w-full bg-white text-gray-9">
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </>
  )
}

export default App

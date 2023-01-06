import { Center, Heading } from '@chakra-ui/react'

import Head from 'next/head'

export default function Setup() {
  return (
    <>
      <Head>
        <title>Setup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center height="100vh">
        <Heading>Setup</Heading>
      </Center>
    </>
  )
}
